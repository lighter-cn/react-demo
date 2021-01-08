import React from 'react'

const API_KEY = process.env.REACT_APP_GURUNAVI_KEY;

class Gurunavi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // 取得結果
      hasResult: false,
      searchId: "",
      searchResult: {
        name: "",
        address: "",
        tel: ""
      }
    }
  }

  // 検索実行
  get_result(e){
    // input のデフォルト挙動の削除
    e.preventDefault();
    // APIへのリクエスト
    const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${API_KEY}&id=${this.state.searchId}`;
    // const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${API_KEY}&id=kcrx702`;
    fetch(url)
    .then((res) => {return res.json()})
    .then((result)=>{
      console.log(result.rest[0].name);
      this.set_result(result)
    });
  }
  
  // 結果を取得
  set_result(result){
    this.setState({
      hasResult: true,
      searchResult: {
        name: result.rest[0].name,
        address: result.rest[0].address,
        tel: result.rest[0].tel
      }
    });
  }

  // 検索ID取得
  set_searchId(str){
    this.setState({searchId: str});
  }

  render(){
    let result;
    if(this.state.hasResult){
      result=(
        <div>
          <p>{ this.state.searchResult.name }</p>
          <p>{ this.state.searchResult.address }</p>
          <p>{ this.state.searchResult.tel }</p>
        </div>
      );
    }
    return(
      <div>
        <h1>ぐるなび検索</h1>
        <form>
          <input
            onChange={(e)=>{this.set_searchId(e.target.value)}}
          /><br />
          <input
            type="submit"
            value="送信"
            onClick={(e)=>{this.get_result(e)}}
          />
        </form>
        { result }
      </div>
    );
  }
}

export default Gurunavi;
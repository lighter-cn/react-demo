import React from 'react'

const API_KEY = process.env.REACT_APP_GURUNAVI_KEY;

class Gurunavi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasResult: false,
      searchWord: "",
      searchResult: {
        name: "",
        address: "",
        tel: ""
      }
    }
  }

  get_result(e){
    e.preventDefault();
    // APIへのリクエスト
    const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${API_KEY}&freeword=${this.state.searchWord}`;
    // const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${API_KEY}&id=kcrx702`;
    fetch(url)
    .then((res) => {return res.json()})
    .then((result)=>{
      console.log(result.rest[0].name);
      this.set_result(result)
    });
  }

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
  set_searchWord(str){
    this.setState({searchWord: str});
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
      <div className="sub-content">
        <h1>ぐるなび検索</h1>
        <form>
          <input
            onChange={(e)=>{this.set_searchWord(e.target.value)}}
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
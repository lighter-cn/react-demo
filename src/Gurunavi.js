import React from 'react'
import GurunaviResults from './GurunaviResults';

const API_KEY = process.env.REACT_APP_GURUNAVI_KEY;

class Gurunavi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasResult: false,
      searchWord: "",
      searchResult: {},
      isError: false
    }
  }

  get_result(e){
    e.preventDefault();
    // APIへのリクエスト
    const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${API_KEY}&freeword=${this.state.searchWord}`;
    fetch(url)
    .then((res) => {return res.json()})
    .then((result)=>{
      if(result.rest.length > 0){
        this.set_result(result)
      }else{
        // エラー処理
      }
    })
    .catch((e)=>{
      console.log(e.message);
      this.setState({isError: true});
    });
  }

  set_result(result){
    this.setState({
      hasResult: true,
      searchResult: result.rest
    });
  }

  set_searchWord(str){
    this.setState({searchWord: str});
  }

  render(){
    let result;
    if(this.state.hasResult){
      result = (
        <div className="g-results">
          {this.state.searchResult.map((r)=>{
            return(
            <GurunaviResults 
              key={r.id}
              name={r.name}
              address={r.address}
              tel={r.tel}
            />
            );
          })}
        </div>
      );
    }
    return(
      <div className="content">
        <h1>ぐるなび検索</h1>
        <form>
          <input
            placeholder="フリーワード入力"
            onChange={(e)=>{this.set_searchWord(e.target.value)}}
          />
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
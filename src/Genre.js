const Genre = {
    Pop: 'POP',
    Anime: '애니메이션',
    Variety: '버라이어티',
    Vocaloid: '보컬로이드',
    Classical: '클래식',
    GameMusic: '게임 뮤직',
    NamcoOriginal: '남코 오리지널',
    getGenre: function(value) {
        console.log(this);
        return Object.keys(this).find((genre) => this[genre] === value) || null;
    }
}

export default Genre;
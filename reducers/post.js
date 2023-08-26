const initialState = {
    mainPost:[{
        id:1,
        User:{
            id:1,
            nickname:'김영호',
        },
        content:'첫 게시물 #해시태그 #리액트',
        Images:[{
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRar6GUb8CskQ5bS3QyUHhMoXVCzA4DzCjFe5_74cuBoOArmMkKf1UNBOibsLxS4Rjf0&usqp=CAU'
        },{
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPeSEeSzAs4fjJ1YD-LCe_0lQZoYuWkJRLvKbdhXLJg&s'
        },{
            src:'https://health.chosun.com/site/data/img_dir/2023/02/24/2023022401938_0.jpg'
        }],
        Comments:[{
            User:{
                nickname:'hero'
            },
            content:'1빠'
        },{
            User:{
                nickname:'nero',
            },
            content:'2빠'
        }]
    }],
    postAdded:false,
    imagePath:[],
}

const postReducer = (state=initialState,action) => {
    switch(action.type) {
        
        default : return state;
    }
}

export default postReducer;
let state = {
    profilePage: {
        profile: {
            bgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d971472733091.5bf1c9e776516.jpg",
            avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
            name: "DarkKeksik",
            status: "В поисках музыки",
            musicPosts: "3"
        },
        posts: [
            { likes: "10", message: "Hi, how are you?"},
            { likes: "15", message: "My first post?" },
            { likes: "2",  message: "My first post?" }
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: "1",
                url: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
                name: "АфродитИТ",
                numberNewPosts: "10"
            },
            {
                id: "2",
                url: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg",
                name: "Андре Нихачук",
                numberNewPosts: "4"
            },
            {
                id: "3",
                url: "https://cs16planet.ru/steam-avatars/images/avatar3177.jpg",
                name: "Beta tester",
                numberNewPosts: "3"
            }
        ],
        messages: [
            {
                name: "АфродитИТ",
                avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
                msg: "Привет, знаю что давно не писал, но ты должен мне сотку",
                date: "2020-03-02T09:51:00",
                owner: true
            },
            {
                name: "АфродитИТ",
                avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
                msg: "Привет, знаю что давно не писал, но ты должен мне сотку",
                date: "2020-03-02T09:51:00",
                owner: true
            },
            {
                name: "Андре Нихачук",
                avatar: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg",
                msg: "Это ту, которую я вернул тебе 3 месяца назад?",
                date: "2020-03-02T09:51:00",
                owner: false
            },
            {
                name: "АфродитИТ",
                avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
                msg: "Понял)",
                date: "2020-03-02T09:51:00",
                owner: true
            }
        ]
    },
    sidebar: {
        pages: [

        ],
        friends: [
            {
                name: "фродитИТ",
                avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4"
            },
            {
                name: "Андре Нихачук",
                avatar: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"
            },
            {
                name: "Beta tester",
                avatar: "https://cs16planet.ru/steam-avatars/images/avatar3177.jpg"
            }
        ]
    }
};

export let addMsgForDialog = (dialogMsg) => {
    let newMsg = {
        name: "АфродитИТ",
        avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
        msg: dialogMsg,
        date: "2020-03-04T09:51:00",
        owner: true
    };

    state.dialogsPage.messages.push(newMsg);
};

export let addPost = (postMsg, likes) => {
    let newPost = {
        message: postMsg,
        likes: likes
    };
    state.profilePage.posts.push(newPost);
};

export default state;
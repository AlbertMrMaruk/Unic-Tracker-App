const { REACT_APP_ACCESS_TOKEN, REACT_APP_USER_ID } = process.env;

class ReelsService {
  requestHash = async () => {
    return fetch(
      `https://graph.facebook.com/v17.0/ig_hashtag_search?user_id=${REACT_APP_USER_ID}&q=beautifuldestinations&access_token=${REACT_APP_ACCESS_TOKEN}`,
      {
        method: "GET",
      }
    ).then((response) => response.json());
  };
  requestTopMedia = async () => {
    return fetch(
      `https://graph.facebook.com/v17.0/17843507206006266/top_media?fields=id,media_type,media_url,children,permalink&user_id=${REACT_APP_USER_ID}&access_token=${REACT_APP_ACCESS_TOKEN}`,
      {
        method: "GET",
      }
    ).then((response) => response.json());
  };
  requestMediaURL = async (url) => {
    return (
      fetch(`https://riad-insta.vercel.app/api?url=${url}`)
        .then((response) => response.json())
        // .then((el) => el.blob())
        .then((el) => el.downloadUrl)
    );
  };
  requestMedia = async () => {
    console.log(REACT_APP_USER_ID);
    return fetch(
      `https://graph.facebook.com/v17.0/18015384439714568?fields=id,media_type,media_url&user_id=${REACT_APP_USER_ID}&access_token=${REACT_APP_ACCESS_TOKEN}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((el) => console.log(el));
  };
  // /{ig-hashtag-id}/top_media?user_id={user-id}&fields={fields}
}
//"17843507206006266"
//"17841563185121108"

/*
{
    "data": [
        {
            "id": "18218366998241251",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "18025697296514357",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "17978189174355246",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357996136_276709015017424_2325670165809902451_n.webp?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=pRYMLYqZCB8AX-mBNq6&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfB4vlfkVxYRsykP_XEnnFMvTJ2QAbZaZJhKL1XIV5F7jA&oe=64A868D1"
        },
        {
            "id": "17994343234998588",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "17937345098690661",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "18237116458206822",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357643219_258805273424879_762234322136489099_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=leZfZyHvo4AAX97M1fG&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDSxwL4ziejjhOhCki6Fd_A6XsYs814yJYL57FThuktmQ&oe=64A94AC9"
        },
        {
            "id": "17963339711584189",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357664176_1364033217661336_1249723636297901728_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Uj8JIVyIjzkAX-i_a3q&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfAVDMemAWfI5SzFYvcxzDbXe_FQev3OLfGN1u0VUVapaQ&oe=64A91957"
        },
        {
            "id": "17992965752071496",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/357455650_932085767857695_8335448444559437552_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=cY-Kn2DNOocAX-tGOvV&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfAmN9m2ktwg0GtOTBAKsopvGmZNWZOizxdHSZhzPL_CLQ&oe=64A85603"
        },
        {
            "id": "17886978227801877",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357433371_805507577821180_4196750223536012450_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=KlPHy8c2rSUAX9Fb781&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfA_mAWI-KkCAuDaLeOf9KVIqZGW0bkXG7RBbdS20-XlIg&oe=64A83A39"
        },
        {
            "id": "17991480656034905",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "17923848140738414",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357652009_840376897458802_6869601981626605071_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=YKh4LFF5950AX_P04zx&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfBi4Oh6bzAT7P3liG-c472HPj9d4PI8kaNFuOgPxJvh5g&oe=64A84DB0"
        },
        {
            "id": "18024171874522117",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357360583_122089930923811_5310118780022826002_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qiMnzU-y8NUAX9mRpR1&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfCwWvS19H3wTX4M4eyoGbRRfPSWncfoW9e46NR6dKSTgA&oe=64A9C233"
        },
        {
            "id": "17979879572471420",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357889730_609612344524499_2514309238332906400_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Spa5PDzBar4AX96UOfk&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDdGSk8nMQ5ODtQ6bJdwIdWDLbykQlNbq_dN8ZxUGrHIw&oe=64A9039E"
        },
        {
            "id": "17883625295871027",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357657084_925579069238634_5713256572905017620_n.heic?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vFbL-KgbKLQAX_7tbm3&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfBPEP5hPiSqxEMv_apyf9OmfaePMy2n17I_U8CIgcOcVw&oe=64A9887C"
        },
        {
            "id": "17949136034512203",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357428363_821165086375798_3780307116661014810_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Hzlmv_VD8LQAX8s4S0Y&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDkZSLJI0nkMyaJieRlvmk-ZjxDYqRyqq6mApbosZsQwg&oe=64A9B001"
        },
        {
            "id": "17985753608184940",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357505797_3716167365282050_3375074633311165969_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=hGITodoTteAAX8owNl1&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDCHyRCiAMk8I-Gcxu53DJlMZRqLrrTpquIxZtyDLnkBg&oe=64A8C2F3"
        },
        {
            "id": "17973579329235786",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "17999510266792879",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/358005068_2800510016752666_1291247646159279457_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Fm6SR-4vHXIAX80Qsz2&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfA2b14HizwGseNE7RGN_fNifytcWG1cZQkkU5gzTqN6sw&oe=64A85F1E"
        },
        {
            "id": "17882893043885962",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357551154_205346835427762_6204250857913815397_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=bGWzWlLcAiEAX-eHkH7&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDr1qqQ2Koz4BlOTX4kr4PDl-y-ssHpbdZrvdiRsfm3lg&oe=64A99C04"
        },
        {
            "id": "18024155011575149",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357668399_838551147974094_161637920738364581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=2OcJz6J-fpkAX9gvCNa&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDHy1T08SSZcsJXwOxC5HkNKTOUu7GkGP9k63ORhT-MjA&oe=64A8E600"
        },
        {
            "id": "17990182180946660",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/358033796_841966950884801_4012141554329355965_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-aVExytxhtgAX-kxYcZ&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfAYf8gYucv-Yt_i107dhhXf8Ur6u1UflFuwCNX6jEJbJQ&oe=64A93BC5"
        },
        {
            "id": "18002972230759159",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357778351_589080200093567_5383977568865759673_n.heic?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=We7bdH9phoEAX8UmVhV&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfD4ev8l-jZD6QlnOViFQ6LuFG-iTy7d2UbwEFrTyHfDDQ&oe=64A979F6"
        },
        {
            "id": "17851182044982680",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/358000226_1696961854050920_1186851309896602465_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=FPt5p88FHlYAX_R7QTW&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfDNtKmpR8eIPG2aJuts8145A2otWkAkaX7hsvjNeKA9uQ&oe=64A92C8A"
        },
        {
            "id": "18228841900172700",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357239441_982961602731536_7168172848089899919_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=bd23LplBi0cAX_6WmfI&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfALym2La-TA96Y_7WZDjicfVv8Rx1CUT_VQjTw107yEcg&oe=64A8EF7C"
        },
        {
            "id": "17931632594705762",
            "media_type": "IMAGE",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/357378632_2060675677657826_5946634168605900950_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Oi6syKsCV2wAX_7QSOq&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfA6mN_PJEVIQHra0v3cw22fIUZLlkjDqWqFDBl_6W36EQ&oe=64A989B5"
        }
    ],
    "paging": {
        "cursors": {
            "after": "ZADM3OTNiMTUyMzI1NDU4OTgwMDdiOTc0NzhhYzAxMGUZD"
        },
        "next": "https://graph.facebook.com/v17.0/17843507206006266/top_media?fields=id,media_type,media_url&user_id=17841404098860337&access_token=EAALm40soXfcBAPNFvBvZCiXDHhoWXfIBlKBjUi57UMXm7TRvzc06ZBj87raq3aYzW2nIvuHXzhOhxeZA8n728GEv5B0EWIUZBxLJOsb0cdHSvCMKWTaOSJCwS5PW7yeB3VGQITCnBgMNHH2VEWz4e5b7cXksu7F59jEL4Q8gDs60fSJQZC9oM1A5TEVezTLA77JtoJsO4r83NqLLGA0nb&pretty=1&limit=25&after=ZADM3OTNiMTUyMzI1NDU4OTgwMDdiOTc0NzhhYzAxMGUZD"
    }
}
*/
export const Reels = new ReelsService();

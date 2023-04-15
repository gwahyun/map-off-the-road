import type { GetStaticProps, GetStaticPaths } from 'next';
import { NextPage } from "next";
import { useState } from 'react';

type NewsT = {
    id: string;
    created_at: string;
    deleted_at: string | null;
    author: string | null;
    description: string;
    keywords: string[];
    press: string;
    published_at: string | null;
    thumbnail: string;
    title: string;
};

interface NewsPageProps {
    firstPage: NewsT[]
}

const limit = 5;

const NewsPage: NextPage<NewsPageProps> = ({ firstPage }) => {
    const [newsList, setNewsList] = useState(firstPage);
    return (
        <ul>
            {newsList.map(news => (
                <li key={news.id}>{news.title}</li>
            ))}
            <button onClick={() => {
                const offset = newsList.length;
                setNewsList(old => [...old, ...DATA.slice(offset, offset + limit)])
            }}> 새 페이지 불러오기 </button>
        </ul>
    );
}
    
const DATA: NewsT[] = Array.from({ length: 5 }, ()=> [
    {
        "id": "01gw9t1j89wwcv82mbs2a3abma",
        "created_at": "2023-03-24T21:38:37.087589",
        "deleted_at": null,
        "author": "이지은 기자",
        "description": "대한민국 강의계의 샛별로 떠오르고 있는 '김연우' 씨가 최고의 강의 스타가 된 이유에 대해 알아보자. 김연우 씨는 특유의 유머와 친근한 강의 스타일로 대학생들 사이에서 큰 인기를 끌고 있다. 그의 강의는 진지한 주제를 다루면서도 이해하기 쉽게 설명하며, 수강생들이 흥미롭게 수업을 따라갈 수 있도록 적극적인 참여를 유도한다.또한 김연우 씨는 자신이 진행하는 수업 내용에 대해 깊이 있는 지식과 경험을 가지고 있어, 수강생들의 궁금증을 직접 해결해주는 모습도 인상적이다. 그리고 강의 외적으로도 김연우 씨는 학생들과의 소통을 소중하게 생각하며, 적극적으로 교류하는 모습이 매우 친근하다. 이처럼 김연우 씨의 강의 스타일은 대학생들 사이에서 최고로 평가되고 있다.",
        "keywords": [
            "김연우",
            "강의",
            "최고"
        ],
        "press": "파이어뉴스",
        "published_at": "2023-03-24T23:30:00.123",
        "thumbnail": "https://images.unsplash.com/photo-1626287935075-3275d2d9025e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "title": "강의계의 샛별 '김연우', 성공 비결은 수강생들의 목소리에 있었다"
    },
    {
        "id": "01gw9tgnfd93hk3a3fax4radxt",
        "created_at": "2023-03-24T21:46:51.896327",
        "deleted_at": null,
        "author": "조이스 클락 기자",
        "description": "최근 인기 있는 온라인 게임에서 유저들 사이에서 유명한 '불가살'이라는 게임 닉네임을 가진 유저가 생계유지를 위해 눈길을 끄는 행동을 했다. 이 유저는 게임에서의 희귀한 아이템을 모아 판매하는 것으로 생계를 유지하고 있었는데, 최근 들어 수익이 줄어들면서 어떻게든 돈을 벌기 위해 필사적인 방법을 모색하고 있었다.\n 그런데 그의 불쌍한 상황을 알게 된 '마법소녀'라는 유저가 나서서 그를 돕겠다고 소문을 내며 인기를 얻고 있다. 이 유저는 게임 속에서 손쉽게 돈을 벌 수 있는 마법과 같은 능력을 가지고 있어 그의 등장으로 '불가살'은 이제 생계유지 걱정에서 벗어날 수 있게 되었다.\n 하지만 이에 대한 의견은 갈리고 있는데, 일부 유저들은 그가 마법을 사용해 게임 경제에 악영향을 끼칠 수 있다는 우려를 표명하고 있다.",
        "keywords": [
            "불가살",
            "마법소녀",
            "생계유지"
        ],
        "press": "판도라 뉴스",
        "published_at": "2023-03-25T01:30:00.123",
        "thumbnail": "https://images.unsplash.com/photo-1486611289333-50d2b3ac99d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "title": "'불가살'의 생계유지 위해 '마법소녀'가 등장?"
    },
    {
        "id": "01gw9v4tvfne00mt155pqk2v15",
        "created_at": "2023-03-24T21:57:52.765407",
        "deleted_at": null,
        "author": "지재혁 기자",
        "description": "의류 기업 에이블리(Ably)가 '불만'으로 대규모 인력 이탈을 당한 것으로 밝혀졌다. 이에 따라 산업계 내에서는 '엑소더스'(인력 유출 현상)가 심각하게 우려되고 있다.\n 에이블리는 대규모 인력 이탈 사유에 대해 자세한 설명은 하지 않았지만, 현직 종사자들은 '근무 환경과 조직문화'에 대한 불만이 크다는 것을 입을 모았다. 이를 수용하지 못한 인력들은 대규모로 이탈하게 되었으며, 이로 인해 기업 내부는 큰 충격을 받았다.\n 이번 인력 유출 사태로 인해 산업계는 '엑소더스'가 지속될 가능성이 있다는 경고를 내놓고 있다. 산업계 전문가들은 '기업이 인력을 유지하고 확보하기 위해서는 더 나은 근무 환경과 조직문화를 구축해야 한다'며, 기업의 역량 강화를 촉구하고 있다.",
        "keywords": [
            "에이블리",
            "엑소더스",
            "인력유출"
        ],
        "press": "데일리 카카오",
        "published_at": "2023-03-22T01:30:00.123",
        "thumbnail": "https://images.unsplash.com/photo-1486611289333-50d2b3ac99d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "title": "에이블리, '불만'으로 인한 대규모 인력 이탈... '엑소더스' 심각"
    },
    {
        "id": "01gw9v592mt0ywa77q4a51g74j",
        "created_at": "2023-03-24T21:58:07.327778",
        "deleted_at": null,
        "author": null,
        "description": "This is a breaking news article",
        "keywords": [],
        "press": "CNN",
        "published_at": null,
        "thumbnail": "https://example.com/image.png",
        "title": "Breaking news"
    }
]).flat()

export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {

    const page = 1;
    const offset = limit * (page - 1)
    return {
      props:{
        firstPage: DATA.slice(offset, offset + limit)
      },
      revalidate: 60 * 60 * 24 * 7
    } 
}

// export const getStaticPaths: GetStaticPaths<NewsPageParams> = async function (){
//     const paths = Array.from({ length: 2 }, (_, i) => ({
//         params: {
//             page: i.toString()
//         }
//     }))
//     return { paths, fallback: false }
// }

export default NewsPage;
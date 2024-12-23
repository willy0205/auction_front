export const mockPosts = [
  {
    id: '1',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800'
    ],
    caption: '오늘의 야경 🌃 #서울 #야경 #도시',
    createdAt: '2024-03-20T09:00:00.000Z',
    author: {
      id: 'user1',
      username: 'willy950205',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=willy950205',
    },
    likes: 42,
    isLiked: false,
    comments: [
      {
        id: 'c1',
        username: 'photo_lover',
        text: '야경이 너무 예쁘네요! 📸',
        createdAt: '2024-03-20T09:30:00.000Z',
        likes: 5,
        isLiked: false,
        replies: [
          {
            id: 'r1-1',
            username: 'willy950205',
            text: '감사합니다! 남산타워에서 찍었어요 😊',
            createdAt: '2024-03-20T09:35:00.000Z',
            likes: 2,
            isLiked: false,
          },
          {
            id: 'r1-2',
            username: 'seoul_view',
            text: '저도 이 뷰 너무 좋아해요!',
            createdAt: '2024-03-20T09:40:00.000Z',
            likes: 1,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c2',
        username: 'night_walker',
        text: '위치가 어디인가요? 저도 가보고 싶어요!',
        createdAt: '2024-03-20T10:00:00.000Z',
        likes: 3,
        isLiked: false,
        replies: [
          {
            id: 'r2-1',
            username: 'willy950205',
            text: '남산타워 전망대입니다 🗼',
            createdAt: '2024-03-20T10:05:00.000Z',
            likes: 1,
            isLiked: false,
          }
        ]
      }
    ],
  },
  {
    id: '2',
    images: [
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800',
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800'
    ],
    caption: '주말 브런치 🍳 #브런치 #카페 #맛스타그램',
    createdAt: '2024-03-19T11:00:00.000Z',
    author: {
      id: 'user2',
      username: 'foodie_kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=foodie_kim',
    },
    likes: 78,
    isLiked: true,
    comments: [
      {
        id: 'c3',
        username: 'cafe_hunter',
        text: '어디 카페인가요? 분위기가 너무 좋아보여요!',
        createdAt: '2024-03-19T11:30:00.000Z',
        likes: 4,
        isLiked: false,
        replies: [
          {
            id: 'r3-1',
            username: 'foodie_kim',
            text: '성수동 ○○카페에요~ 주말에는 예약 필수!',
            createdAt: '2024-03-19T11:35:00.000Z',
            likes: 2,
            isLiked: false,
          }
        ]
      }
    ],
  },
  {
    id: '3',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
    ],
    caption: '새로 입주한 우리집 🏠 #인테리어 #홈스타그램',
    createdAt: '2024-03-18T15:00:00.000Z',
    author: {
      id: 'user3',
      username: 'interior_pro',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=interior_pro',
    },
    likes: 156,
    isLiked: false,
    comments: [
      {
        id: 'c4',
        username: 'home_lover',
        text: '인테리어 너무 예쁘네요! 어떤 업체 이용하셨나요?',
        createdAt: '2024-03-18T15:30:00.000Z',
        likes: 6,
        isLiked: false,
        replies: [
          {
            id: 'r4-1',
            username: 'interior_pro',
            text: '감사합니다 😊 ○○인테리어와 작업했어요!',
            createdAt: '2024-03-18T15:35:00.000Z',
            likes: 2,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c5',
        username: 'design_master',
        text: '조명이 특히 멋지네요 👍',
        createdAt: '2024-03-18T16:00:00.000Z',
        likes: 3,
        isLiked: false,
        replies: []
      }
    ],
  },
  {
    id: '4',
    images: [
      'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800',
      'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=800',
    ],
    caption: '오늘의 러닝 완료 🏃‍♂️ #러닝 #운동 #건강',
    createdAt: '2024-03-17T08:00:00.000Z',
    author: {
      id: 'user4',
      username: 'runner_park',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=runner_park',
    },
    likes: 89,
    isLiked: false,
    comments: [
      {
        id: 'c6',
        username: 'health_junkie',
        text: '대단하세요! 몇 키로 뛰셨나요?',
        createdAt: '2024-03-17T08:30:00.000Z',
        likes: 4,
        isLiked: false,
        replies: [
          {
            id: 'r6-1',
            username: 'runner_park',
            text: '오늘은 10km 완주했어요! 💪',
            createdAt: '2024-03-17T08:35:00.000Z',
            likes: 3,
            isLiked: false,
          },
          {
            id: 'r6-2',
            username: 'marathon_kim',
            text: '저도 오늘 러닝했는데 날씨 좋았죠!',
            createdAt: '2024-03-17T09:00:00.000Z',
            likes: 2,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '5',
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800'
    ],
    caption: '우리집 냥이의 일상 😺 #고양이 #집사그램 #펫스타그램',
    createdAt: '2024-03-16T14:00:00.000Z',
    author: {
      id: 'user5',
      username: 'cat_lover',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cat_lover',
    },
    likes: 234,
    isLiked: true,
    comments: [
      {
        id: 'c7',
        username: 'pet_friend',
        text: '너무 귀여워요! 품종이 뭔가요?',
        createdAt: '2024-03-16T14:30:00.000Z',
        likes: 8,
        isLiked: false,
        replies: [
          {
            id: 'r7-1',
            username: 'cat_lover',
            text: '코숏이에요~ 😊',
            createdAt: '2024-03-16T14:35:00.000Z',
            likes: 3,
            isLiked: false,
          },
          {
            id: 'r7-2',
            username: 'pet_friend',
            text: '저희 집 냥이랑 닮았네요!',
            createdAt: '2024-03-16T15:42:00.000Z',
            likes: 2,
            isLiked: false,
          },
          {
            id: 'r7-3',
            username: 'cat_lover',
            text: '우리 냥이들 선남선녀네요 ㅎㅎ',
            createdAt: '2024-03-16T16:18:00.000Z',
            likes: 4,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c8',
        username: 'animal_doctor',
        text: '건강해보이네요! 털빛이 너무 좋아요',
        createdAt: '2024-03-16T15:00:00.000Z',
        likes: 5,
        isLiked: false,
        replies: [
          {
            id: 'r8-1',
            username: 'cat_lover',
            text: '항상 영양제랑 간식 챙겨주고 있어요 😊',
            createdAt: '2024-03-16T17:23:00.000Z',
            likes: 2,
            isLiked: false,
          },
          {
            id: 'r8-2',
            username: 'animal_doctor',
            text: '좋은 집사님이시네요! 앞으로도 잘 부탁드려요~',
            createdAt: '2024-03-16T18:45:00.000Z',
            likes: 3,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '6',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800'
    ],
    caption: '홈베이킹 도전! 🍕 #피자 #홈베이킹 #요리스타그램',
    createdAt: '2024-03-15T18:00:00.000Z',
    author: {
      id: 'user6',
      username: 'cooking_master',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cooking_master',
    },
    likes: 167,
    isLiked: false,
    comments: [
      {
        id: 'c9',
        username: 'chef_kim',
        text: '도우가 정말 맛있어 보여요! 레시피 공유해주세요~',
        createdAt: '2024-03-15T18:30:00.000Z',
        likes: 12,
        isLiked: false,
        replies: [
          {
            id: 'r9-1',
            username: 'cooking_master',
            text: '레시피는 하이라이트에 있어요! 😊',
            createdAt: '2024-03-15T18:35:00.000Z',
            likes: 4,
            isLiked: false,
          },
          {
            id: 'r9-2',
            username: 'chef_kim',
            text: '감사합니다! 꼭 따라해볼게요 👍',
            createdAt: '2024-03-15T19:15:00.000Z',
            likes: 2,
            isLiked: false,
          },
          {
            id: 'r9-3',
            username: 'pizza_lover',
            text: '저도 해보고 싶네요! 하이라이트 저장했어요~',
            createdAt: '2024-03-15T20:45:00.000Z',
            likes: 1,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c10',
        username: 'food_photo',
        text: '사진 구도가 너무 예쁘네요! 카메라 뭐 쓰세요?',
        createdAt: '2024-03-15T21:20:00.000Z',
        likes: 6,
        isLiked: false,
        replies: [
          {
            id: 'r10-1',
            username: 'cooking_master',
            text: '아이폰 15로 찍었어요~ 자연광이 좋았네요 ☺️',
            createdAt: '2024-03-15T22:05:00.000Z',
            likes: 3,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '7',
    images: [
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800',
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800'
    ],
    caption: '드디어 떠나는 여행! ✈️ #여행 #공항 #출국',
    createdAt: '2024-03-14T07:30:00.000Z',
    author: {
      id: 'user7',
      username: 'travel_kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=travel_kim',
    },
    likes: 198,
    isLiked: true,
    comments: [
      {
        id: 'c11',
        username: 'wanderlust',
        text: '어디로 가시나요? 좋은 여행 되세요! 🌏',
        createdAt: '2024-03-14T07:45:00.000Z',
        likes: 7,
        isLiked: false,
        replies: [
          {
            id: 'r11-1',
            username: 'travel_kim',
            text: '발리로 10일 여행 갑니다! 😊',
            createdAt: '2024-03-14T08:00:00.000Z',
            likes: 3,
            isLiked: false,
          },
          {
            id: 'r11-2',
            username: 'bali_lover',
            text: '우부 꼭 가보세요! 추천 맛집 보내드릴게요~',
            createdAt: '2024-03-14T09:15:00.000Z',
            likes: 4,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c12',
        username: 'airport_boy',
        text: '저도 다음 주에 출국해요! 즐거운 여행 되세요 ✨',
        createdAt: '2024-03-14T10:30:00.000Z',
        likes: 5,
        isLiked: false,
        replies: [
          {
            id: 'r12-1',
            username: 'travel_kim',
            text: '감사합니다! 어디로 가시나요?',
            createdAt: '2024-03-14T11:20:00.000Z',
            likes: 1,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '8',
    images: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800'
    ],
    caption: '우리 강아지 생일! 🎂 #강아지 #��일 #댕댕이',
    createdAt: '2024-03-13T16:00:00.000Z',
    author: {
      id: 'user8',
      username: 'puppy_mom',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=puppy_mom',
    },
    likes: 312,
    isLiked: false,
    comments: [
      {
        id: 'c13',
        username: 'dog_lover',
        text: '생일 축하해요! 케이크 너무 귀엽네요 🎉',
        createdAt: '2024-03-13T16:15:00.000Z',
        likes: 15,
        isLiked: false,
        replies: [
          {
            id: 'r13-1',
            username: 'puppy_mom',
            text: '감사합니다 ❤️ 강아지용 케이크에요!',
            createdAt: '2024-03-13T16:30:00.000Z',
            likes: 5,
            isLiked: false,
          },
          {
            id: 'r13-2',
            username: 'cake_master',
            text: '어디서 주문하셨어요? 저희 강아지도 곧 생일이라...',
            createdAt: '2024-03-13T17:45:00.000Z',
            likes: 2,
            isLiked: false,
          },
          {
            id: 'r13-3',
            username: 'puppy_mom',
            text: '○○펫베이커리에서 샀어요! 추천드려요~',
            createdAt: '2024-03-13T18:20:00.000Z',
            likes: 3,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '9',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
    ],
    caption: '새로운 프로젝트 시작! 💻 #개발자 #코딩 #프로그래밍',
    createdAt: '2024-03-12T11:00:00.000Z',
    author: {
      id: 'user9',
      username: 'dev_park',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dev_park',
    },
    likes: 145,
    isLiked: true,
    comments: [
      {
        id: 'c14',
        username: 'coding_master',
        text: '어떤 프로젝트인가요? 궁금해요!',
        createdAt: '2024-03-12T11:30:00.000Z',
        likes: 8,
        isLiked: false,
        replies: [
          {
            id: 'r14-1',
            username: 'dev_park',
            text: 'AI 기반 SNS 서비스입니다 😊',
            createdAt: '2024-03-12T11:45:00.000Z',
            likes: 6,
            isLiked: false,
          },
          {
            id: 'r14-2',
            username: 'ai_expert',
            text: '저도 비슷한 프로젝트 진행중이에요! 정보 공유해요~',
            createdAt: '2024-03-12T13:20:00.000Z',
            likes: 4,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '10',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800'
    ],
    caption: '오늘의 일출 🌅 #새벽 #일출 #산스타그램',
    createdAt: '2024-03-11T05:30:00.000Z',
    author: {
      id: 'user10',
      username: 'mountain_lee',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mountain_lee',
    },
    likes: 423,
    isLiked: false,
    comments: [
      {
        id: 'c15',
        username: 'sunrise_lover',
        text: '북한산 정상에서 찍으신 거죠? 뷰가 장난 아니네요! 👍',
        createdAt: '2024-03-11T06:15:00.000Z',
        likes: 12,
        isLiked: false,
        replies: [
          {
            id: 'r15-1',
            username: 'mountain_lee',
            text: '네 맞아요! 새벽 3시에 출발했어요 ⛰️',
            createdAt: '2024-03-11T06:30:00.000Z',
            likes: 5,
            isLiked: false,
          },
          {
            id: 'r15-2',
            username: 'hiking_pro',
            text: '다음에 같이 가요! 저도 이번주에 도전해보려구요',
            createdAt: '2024-03-11T07:45:00.000Z',
            likes: 3,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c16',
        username: 'photo_master',
        text: '구도랑 색감이 너무 예술이에요 📸',
        createdAt: '2024-03-11T08:20:00.000Z',
        likes: 8,
        isLiked: false,
        replies: [
          {
            id: 'r16-1',
            username: 'mountain_lee',
            text: '감사합니다 🙏 날씨가 너무 좋았어요',
            createdAt: '2024-03-11T09:10:00.000Z',
            likes: 2,
            isLiked: false,
          }
        ]
      }
    ]
  },
  {
    id: '11',
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800',
      'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=800',
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=800'
    ],
    caption: '우리집 고양이들의 일상 😺😺😺 #고양이 #냥스타그램 #집사그램',
    createdAt: '2024-03-10T13:00:00.000Z',
    author: {
      id: 'user11',
      username: 'cat_master',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cat_master',
    },
    likes: 567,
    isLiked: true,
    comments: [
      {
        id: 'c17',
        username: 'cat_lover_kim',
        text: '세 냥이 모두 너무 사랑스러워요! 😍',
        createdAt: '2024-03-10T13:30:00.000Z',
        likes: 15,
        isLiked: false,
        replies: [
          {
            id: 'r17-1',
            username: 'cat_master',
            text: '감사합니다 ❤️ 저희 집 막내가 특히 장난꾸러기예요!',
            createdAt: '2024-03-10T13:45:00.000Z',
            likes: 6,
            isLiked: false,
          },
          {
            id: 'r17-2',
            username: 'cat_lover_kim',
            text: '막내냥이 표정이 너무 귀여워요 ㅠㅠ',
            createdAt: '2024-03-10T14:20:00.000Z',
            likes: 4,
            isLiked: false,
          }
        ]
      },
      {
        id: 'c18',
        username: 'pet_shop_owner',
        text: '세 냥이 모두 건강해보여요! 캣타워는 어디서 구매하셨나요?',
        createdAt: '2024-03-10T15:00:00.000Z',
        likes: 7,
        isLiked: false,
        replies: [
          {
            id: 'r18-1',
            username: 'cat_master',
            text: '○○펫샵에서 샀어요! 퀄리티가 너무 좋더라구요~',
            createdAt: '2024-03-10T15:30:00.000Z',
            likes: 3,
            isLiked: false,
          },
          {
            id: 'r18-2',
            username: 'cat_lover_lee',
            text: '저도 같은 제품 쓰는데 고양이들이 정말 좋아해요!',
            createdAt: '2024-03-10T16:15:00.000Z',
            likes: 2,
            isLiked: false,
          }
        ]
      }
    ]
  }
]; 
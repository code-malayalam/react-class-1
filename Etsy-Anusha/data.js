function getData() {

    const giftSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="11.727272727272728" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`;
    
    return {
        categories: [
            { title: "Sellers' Sales Hub", img: "" },
            { title: "Jewellery & Accessories", img: "" },
            { title: "Clothing & Shoes", img: "" },
            { title: "Home & Living", img: "" },
            { title: "Wedding & Party", img: "" },
            { title: "Toys & Entertainment", img:"" },
            { title: "Art & Collectibles", img: "" },
            { title: "Craft Supplies", img: "" },
            { title: "Gifts", img: giftSVG }
        ],
        overviewCardItems: [
            {
                url: "https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg",
                text: "Wedding"
            },
            {
                url: "https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg",
                text: "Jewellery"
            },
            {
                url: "https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg",
                text: "Clothing",
            },
            {
                url: "https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg",
                text: "Home & Living"
            },
            {
                url: "https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg",
                text: "Wall Art"
            },
            {
                url: "https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg",
                text: "Kitchen & Dining"
            }
        ],
        dealHeadingData: {
            deal: "Deals of the day",
            shop: "Shop all deals",
            url: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 12 24%22%3E%3Cpath fill%3D%22%23222222%22 d%3D%22M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E"
        },
        dealCardContents: [
            {
                url: "https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg",
                offer: "Up to 40% off on",
                heading: "Women's Ethnic Clothing"
            },
            {
                url: "https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg",
                offer: "Up to 40% off on",
                heading: "Women's Western Clothing"
            },
            {
                url: "https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg",
                offer: "Up to 40% off on",
                heading: "Men's Clothing"
            },
            {
                url: "https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg",
                offer: "Up to 40% off on",
                heading: "Fashion Jewellery"
            },
            {
                url: "https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg",
                offer: "Up to 40% off on",
                heading: "Winter Clothing"
            },
            {
                url: "https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg",
                offer: "Up to 40% off on",
                heading: "Wedding Clothing"
            }
        ],
        popularCardItems: [
            {
                imageURL: "https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg",
                text: "Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
                rating: 4.5,
                ratingCount: "9,474",
                oldPrice: 1706,
                discount: 50,
                delivery: ""
            },
            {
                imageURL: "https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg",
                text: "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
                rating: 4.5,
                ratingCount: "13,548",
                oldPrice: 3600,
                discount: 50,
                delivery: "FREE Delivery"
            },
            {
                imageURL: "https://i.etsystatic.com/25168585/c/2500/1987/0/181/il/214e7e/4589233930/il_340x270.4589233930_dg79.jpg",
                text: "Custom Pet Portraits Using Pet Photo Personalized Digital Dog Portraits Cat Portraits Custom Dog Portraits Custom Pet Art Pet Drawing",
                rating: 5,
                ratingCount: "11,068",
                oldPrice: 1273,
                discount: 50,
                delivery: "",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PAINT_PORTRAIT_ETSY_VIDEO_vo9waf.mp4",
            },
            {
                imageURL: "https://i.etsystatic.com/28045281/r/il/3f41fa/3897994052/il_340x270.3897994052_l8xd.jpg",
                text: "Sun catcher/ Crystal suncatcher/ Crystal Rainbow maker/ Aurora gemstone suncatcher/ crystal prism/ wall hanging/ Home decor/ Gift 4 women",
                rating: 5,
                ratingCount: "6,820",
                oldPrice: 2646,
                discount: 10,
                delivery: "FREE Delivery",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Purple1_aal8ie.mp4",
            },
            {
                imageURL: "https://i.etsystatic.com/27890741/c/2343/1862/320/560/il/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg",
                text: "Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality & DURABLE",
                rating: 5,
                ratingCount: "12,331",
                oldPrice: 1449,
                discount: 50,
                delivery: "",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/HFF_Hearts_Video_m6nj4t.mp4",
            },
            {
                imageURL: "https://i.etsystatic.com/26694795/c/2445/1943/282/0/il/035b01/3254592822/il_340x270.3254592822_5dss.jpg",
                text: "Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men",
                rating: 5,
                ratingCount: "6,213",
                oldPrice: 8538,
                discount: 70,
                delivery: "",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PB-42_convert-video-online.com_cfle3f.mp4",
            }
        ],
        valentineGiftItems: [
            {
                imgURL: "https://i.etsystatic.com/21988330/r/il/907c55/4477884414/il_680x540.4477884414_hy17.jpg",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,c_crop,du_15,h_720,q_auto:good,w_720,x_0,y_124/RED_NP_kwstwf"
            },
            {
                imgURL: "https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_680x540.3700725057_szgj.jpg",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/InShot_20211125_132024897_in6joq.mp4"
            },
            {
                imgURL: "https://i.etsystatic.com/17501005/r/il/aa8aff/3518501728/il_680x540.3518501728_5krv.jpg",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/InShot_20211206_095812059_nvtird.mp4"
            },
            {
                imgURL: "https://i.etsystatic.com/32501528/c/1190/946/76/376/il/5841d1/4551382339/il_680x540.4551382339_jh29.jpg",
                videoURL: "https://v-cg.etsystatic.com/video/upload/ac_none,c_crop,du_15,h_1080,q_auto:good,w_720,x_0,y_99/IMG_2223_krvkzs"
            },
            {
                imgURL: "https://i.etsystatic.com/20814531/c/736/585/0/150/il/ad5deb/4185811790/il_680x540.4185811790_9lh9.jpg",
                videoURL: ""
            },
            {
                imgURL: "https://i.etsystatic.com/30767997/c/1080/858/0/364/il/ea7151/4109914487/il_680x540.4109914487_j9v5.jpg",
                videoURL: ""
            }
        ]
    }
}
import projecticons from "../../assets/behance_assets/www_behance_net-5.svg"
import images from "../../assets/behance_assets/www_behance_net-7.svg"
import people from "../../assets/behance_assets/www_behance_net-8.svg"
import asserts from "../../assets/behance_assets/www_behance_net-9.svg"
import peopleToHire from "../../assets/behance_assets/www_behance_net-10.svg"
 const data  = [
    {
      "imageUrl": "https://a5.behance.net/10175c3185fdd05f7a8589e56a0a91de445c0106/img/stories/live/adobe-live-icon.png",
      "name": "Adobe Live",
      "live": true
    },
    {
      "imageUrl": "https://mir-s3-cdn-cf.behance.net/user/100/bdd1e7193455.65aac1a5e379e.jpg",
      "name": "Daniel",
      "live": false
    },
 
    {
      "imageUrl": "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5e1081194470243.65fca75677ee1.png",
      "name": "David",
      "live": true
    },
    {
      "imageUrl": "https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg",
      "name": "Eva",
      "live": false
    },
 
  ]
  

  export const searchType = [

    {
        sItems: 'Projects',
        icons:projecticons,
    },
    {
        sItems: 'Images',
        icons:images
    },
    {
        sItems: 'People',
        icons:people
    },
    {
        sItems: 'Asserts',
        icons:asserts
    },
    {
        sItems: 'People to Hire',
        icons:peopleToHire
    }
]


export const collection = [
{
  name:"Christian Kneise",
  icon:"https://mir-s3-cdn-cf.behance.net/user/50/7f925f172742679.5bdb1310e1baa.jpg",
  img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/97c1a5192115571.65d754b0289a3.jpg",
  title:"Way up north",
  likes:121,
  views:"8.4k"
},
{
  title:"Healthcare Platform | UI/UX Design, Mobile App Design",
  img:"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5af54c189084267.65a66b83bd796.png",
  name:"Multiple Owners",
  likes:3421,
  views:"9.9k",
  multipleOwner:true
}
,
{
  name: "Lia rosa ",
  icon: "https://mir-s3-cdn-cf.behance.net/user/100/06ae051309122649.64ba14adb02b6.png",
  img: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/76775c191913151.65d5f78e2306a.png",
  title: "PROzori | Marketing Agency | Corporate Website",
  likes: 3421,
  views: "9.9k"
},
{

  name: "s",
  icon: "https://mir-s3-cdn-cf.behance.net/user/100/06ae051309122649.64ba14adb02b6.png",
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/c51896192880513.Y3JvcCw2NTYsNTEzLDU2MCw1MDU.jpg",
  title: "PROzori | Marketing Agency | Corporate Website",
  likes: 3421,
  views: "9.9k",
  multipleOwner:true,
},
{

  name: "Olga Manousaridou (Utilla)",
  icon: "https://mir-s3-cdn-cf.behance.net/user/138/f9f1b246595967.660cede97278f.png",
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/81831e166462089.Y3JvcCwxMDA3LDc4OCwxOTcsMA.png",
  title: "PROzori | Marketing Agency | Corporate Website",
  likes: 3421,
  views: "9.9k",

}

,{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/7ec776192313329.Y3JvcCwxMTc4LDkyMSw0OSwxMjU.jpg",
  name:"Michelle Watt",
  icon:"https://mir-s3-cdn-cf.behance.net/user/50/0155a61905213.5f439d375c837.jpg",
  likes: 3421,
  views: "9.9k",
  title:"Cashé: The Smell of Cash Back"

},
{
  name:"Gwen Keraval",
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/7f9cfd160514047.Y3JvcCwxNzAwLDEzMjksMCw0MDg.jpg",
  icon:"https://mir-s3-cdn-cf.behance.net/user/50/23bb243664969.5a1d5987a31b3.jpg",
  likes: 3421,
  views: "9.9k",
  title:"Monmouth University / RetroFuture Poster"
}
]

  data.sort((a, b) => (a.live === b.live) ? 0 : a.live ? -1 : 1);
  export default data
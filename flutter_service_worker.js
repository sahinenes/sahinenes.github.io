'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "96dcde05c284376bd54c6af414977c40",
"assets/AssetManifest.json": "d741577247e0d2fce9d8b9e00b9602ca",
"assets/assets/001-twitter.png": "2657b94b78568336942d7971151a5ca7",
"assets/assets/005-snapchat.png": "7848c8628996acbcdb79dc649555334c",
"assets/assets/006-tumblr.png": "14200db04052b0112439168172f98b61",
"assets/assets/008-facebook.png": "8fbf8c80b7a9e9c01c0b9d69077ba1b6",
"assets/assets/5783599.json": "d7e264af8a7747efea6a0f9404e6c7d6",
"assets/assets/82_abstract_geometric_background_vector%25201.png": "cb9915505ea3d3f45cec2c664fbb95cd",
"assets/assets/agreement.svg": "b8ed8b164b2dbd140178152cc5892ddd",
"assets/assets/angle-right-small.svg": "3d5bfc953c53e64b848e11c595638f97",
"assets/assets/applogo.svg": "b84e018ad3e03874ec6f82f3834261fd",
"assets/assets/architecture-g52c21068c_1280.jpg": "31b8441615567a51a2a6aa6ab2d08507",
"assets/assets/argentina.png": "4df415cf46e8d3d76400c7051f28ee38",
"assets/assets/arrow-down-right-circle.svg": "079117a3f3965434da720e0f46a8c38a",
"assets/assets/arrow-down-small.svg": "03bfe84b9da8a68e43386340439602af",
"assets/assets/arrow-down-to-line.svg": "c8132e9143cf54aafdb3a7788da579cf",
"assets/assets/arrow-right-circle.svg": "19bb0721969e45a2e530e26cefba13bc",
"assets/assets/arrow-right-small.svg": "076107512dd974f55c2fb31f4ddf37bd",
"assets/assets/arrow-right-to-line.svg": "d2cc15639743173f040f22ff47ac2eac",
"assets/assets/arrow-up-right-circle.svg": "bb7d5ea2dbf5834ff55a3ca9763458c6",
"assets/assets/arrow-up-small.svg": "3dd50a208ded157cdad68afa52669fe3",
"assets/assets/arrow-up.svg": "8fd5bad09e5cfd8730e5ca739f57b84f",
"assets/assets/at.svg": "d32c38ff1f50f663b9d8104fc42faa68",
"assets/assets/atom.svg": "58f664adea70f8eeff51f48eb8250910",
"assets/assets/avatar.png": "02c5b5dc930d48e18d0d30165c875e76",
"assets/assets/avatar1.png": "e6899af1e3787e7e4294a12cf13f7ab4",
"assets/assets/avatar2.png": "7dc361d65ea90665427afc6caaa47148",
"assets/assets/avenue-gb0e5048be_1280.jpg": "184e15d00086afe0109e8825eb513203",
"assets/assets/award.svg": "22f8c3b0bb20c04016facf1727722e13",
"assets/assets/Azure_T-Shirt.svg": "d851bf33771ce27f30e2f32573e1b876",
"assets/assets/badge-discount.svg": "c2efe49ed420867da1a75ee65d063f7a",
"assets/assets/Bars.svg": "c709a89790228755ef29fa1bd6ff6d37",
"assets/assets/bell-notification.svg": "e9d48c862cddb518fcc360c0d4a225ca",
"assets/assets/bigchatimage.png": "06b0e387847f7b908336ff43688aefe2",
"assets/assets/bitcoin.svg": "b3bf0542d418a4d31ae8143fff86e0c0",
"assets/assets/bolt-circle.svg": "e9df60258499c15e48adb9da77ef9b02",
"assets/assets/bolt.svg": "850ebe22333ab5cf3b40931d10f26746",
"assets/assets/book-open-reader.svg": "96be2b073a90f2da88cdde56af3f0343",
"assets/assets/book-open-text.svg": "31dcb5d4f78b2308f0285960c74d3c40",
"assets/assets/box-check.svg": "56209acaf0ef73d59fdf9149fcfabc43",
"assets/assets/box-check33.svg": "9542f6b90c90fcb56146bd1f88f7c577",
"assets/assets/box-search.svg": "a3dbea2774c89eafb473c858f78213a8",
"assets/assets/box.svg": "5cd0a36ae498d65a9147398e3b53581b",
"assets/assets/brazil-.png": "3e28f0aa63a3da331c5912e1ac3eaffe",
"assets/assets/briefcase.svg": "1a46726cb0b7d4926786ff3d50fe6dca",
"assets/assets/Brown_T-Shirt.svg": "2b02ca6f30e9371f7fe40c90607ad996",
"assets/assets/btc-graph.svg": "3a413ea5f9ea2d96e102b3c5a24796fe",
"assets/assets/Buzz..svg": "3cccb7cfdc268a42451427f7c8b77325",
"assets/assets/cabinet-filing.svg": "56e4f28d5a11f5a4902af878450c3564",
"assets/assets/calendar-empty-alt.svg": "1de02979622eff1cf0643252dcfb5139",
"assets/assets/calendar.svg": "c6bd6c4d8a5a86180b64ce8145573a59",
"assets/assets/camera-square.svg": "4eccf93bdda9221f62bd5bf5580d26f8",
"assets/assets/cartoon%25201.png": "c7f78826f21ef1c3e51cd03a82595943",
"assets/assets/chart-2.png": "9253b057e7fa2ca608b351f3aa95fd12",
"assets/assets/Chart-3.png": "87958beefa9ce8523937f5dcfb3e2332",
"assets/assets/chart-bar-vertical.svg": "36d8b2f9c0691becf9c0daf5ce37fc2a",
"assets/assets/Chart.svg": "c0a0f18272fa7c7039793b847c505117",
"assets/assets/chat-dots.svg": "f59bfbda27df76b296611d796c1f3e91",
"assets/assets/chat-exclamation.svg": "763c1baf2e3e315cafe7b01aa893fcf1",
"assets/assets/chat-info.svg": "73a3ac9d23aa9ca1ebcb9a1fd8d00e22",
"assets/assets/chats.svg": "c6f4ee38a8c2b339799a466db7bb4bd1",
"assets/assets/check-double.svg": "40ef4c25c5f47e347562a852ecc549d5",
"assets/assets/check.svg": "525cfe49780d2d3decd8f74cb56aca6b",
"assets/assets/cheerful-shopaholic-paying-by-mobile-app.jpg": "9e72229839eca500fad3e7529b163392",
"assets/assets/chevron-down.svg": "129d6d392523a2092f5b3cea739f7049",
"assets/assets/circle.png": "c45dbda1ac1e47649c55fb13f1f605a1",
"assets/assets/clipboard-check.svg": "08f4cab75fc405490c42e381f2f1f3ec",
"assets/assets/clipboard-search.svg": "14cf008d957e187237a4cfd6ab16c2d3",
"assets/assets/clock.svg": "cbd5172d4832bbdc26413d298855be62",
"assets/assets/cloud-check.svg": "50deba4f51d23b8d4ae7bfc56fc8a3eb",
"assets/assets/cloud-upload.svg": "136b8ad479bc356b4c6b0f75285ad6a6",
"assets/assets/Code.svg": "bbc07b99abf423829c52d6c14163871e",
"assets/assets/coins29.svg": "abdd6493eb2d4850d4cd0814949090de",
"assets/assets/comment.svg": "6491cc36eeb2046fb9c68fa0a38da4f2",
"assets/assets/credit-card.svg": "0d845ca71d3804c0b5b460a1ff200759",
"assets/assets/dance-shoes-png-transparent-dance-shoes-images-5-min.png": "775330b04f9b601916496d5122709774",
"assets/assets/desktop.svg": "1392c564fcb40464495abf2e2dbe851e",
"assets/assets/Diagram.svg": "009facb7a229a5ba6a4929c810fa7374",
"assets/assets/dollar-circle.svg": "e54bcf1208c3ae4bc03e39c621b8f398",
"assets/assets/dollar-circle33.svg": "f64a6ba480ba69b4d39c9b5753f8ca43",
"assets/assets/dots-h.svg": "a3c1ac3fd89e67215c220ccb08349dbe",
"assets/assets/download.svg": "f3a620076fcc4733b3735627f8340cf7",
"assets/assets/earning.svg": "ebbf4705e0c17f986ea3417017e5d765",
"assets/assets/envelope.svg": "66d93a6e88cebea62a0778745b65f96b",
"assets/assets/eth-graph.svg": "8d7724d6d6a89c714f4db3ff18d20f99",
"assets/assets/ethereum.svg": "9af6782401b3052327bac7a1e85ea807",
"assets/assets/euro.svg": "5461f3bce1ec9ac69c8d629070713ae9",
"assets/assets/exclamation-circle.svg": "c6538dc0ade107241f8ae1f46d9d01fe",
"assets/assets/eye.svg": "0c482bd93df36adeb422f823fbe3bef5",
"assets/assets/f5d18bb853c6f62199435444ecd4cf82-min.jpg": "8d61fbb6a80801692889110b2cd1e512",
"assets/assets/facebook-176-svgrepo-com.svg": "b955c9321aaadbde1d886230171f1e9d",
"assets/assets/facebook-min.png": "3bd0ba968618cb9567b03326cb148af1",
"assets/assets/fashion-shoes-sneakers-removebg-preview-min.png": "30ade83802fd54bab31cfed17446cd34",
"assets/assets/file-list.svg": "64055de123279a48b1c46b0f3be1110a",
"assets/assets/file-text-edit.svg": "4600d65f29f5455bed50c4e7d8a6fa44",
"assets/assets/file-text.svg": "c021ebeb75368be6ea71ac35676f01b0",
"assets/assets/file.svg": "a33334e4b123af93813ca24d2d492479",
"assets/assets/filter.svg": "fabfddc679c397142d4fdf69b20db3fc",
"assets/assets/fire.svg": "a524f07eb8aac405b02c7a774516bd6b",
"assets/assets/fire29.svg": "4c80db0c137fb9ec247bffee55bdc0cc",
"assets/assets/folder-star.svg": "3e760625cc5bedfd5b7cc6c177213b15",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/Frame29.svg": "02d2b0cc14f2e748d663787d4c8436c1",
"assets/assets/Frame55.svg": "0e00949d8ea2adc74bdc85660f1931db",
"assets/assets/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated.jpg": "7cb36a1bf9aa798dc38189795cb17f88",
"assets/assets/germany.png": "85ca59c60c9179d7b3e9b6ab03b407c7",
"assets/assets/gift.svg": "c29a8c76a3e901c2ab1f45da36726dc8",
"assets/assets/globe.svg": "e0322f0eb2941222a1ace11b48d8e1d3",
"assets/assets/gold-ingots.png": "a6a2037eaa8b078e1d531664081bfc4f",
"assets/assets/google-min.png": "5e06aa144d501e98c8aa41f999073bdd",
"assets/assets/google-plus-165-svgrepo-com.svg": "68a516e9bf5894ed452c427209d06ddf",
"assets/assets/Google.svg": "0e3c730ab3e9f354bb9416f8e9b0c71b",
"assets/assets/graduation-cap.svg": "ad4a58db5d136bffe0845cb71d2175c9",
"assets/assets/Grey_T-Shirt.svg": "418209d28291bc578db639fe27a310f1",
"assets/assets/grid-circle.svg": "feab85e8b86b12270e7494196aaac9d0",
"assets/assets/grid-square-circle.svg": "bccc169c2c736a159e8445ef79dcc6af",
"assets/assets/grid-square.svg": "ebbe395d57fb70239962a8af8f1b6fe6",
"assets/assets/grid-web-3.svg": "2a533455053829d5063d5cdda49c2ad1",
"assets/assets/grid-web-5.svg": "107c9128b457ceba7f233e6397104b09",
"assets/assets/grid-web-6.svg": "e5b15e2ff0e5dc825d3300cc900f9092",
"assets/assets/grop%2520%252010000000835.svg": "b3bf85a336d59a210a4a224d328f4e83",
"assets/assets/Group%25201000000834.svg": "a05a71b6c7c1315acf3f1fbedca3c1cc",
"assets/assets/Group%25201000000836.svg": "a428725e00dbd1cdfce2fad3f81d05ee",
"assets/assets/Group%25201000000838.svg": "9825d93868dd1b47a71719334d552db4",
"assets/assets/Group%252047858.svg": "f1a073af5331e86bb6a730d0bf77ad85",
"assets/assets/Group%252048081.svg": "fb8aae9383e9c24690477ceb30d3dd43",
"assets/assets/Group%25208342.svg": "891fc01eba790a4b8ae32cbe554f9324",
"assets/assets/growth.svg": "db1a308a2fdff3588f16bd9ba5cb5e3e",
"assets/assets/guarantee%25201.svg": "c0eac6c871ac53c7341f5ef0067cd160",
"assets/assets/hand-holding-dollar.svg": "e10825cd99bdb071e1c9030a62221270",
"assets/assets/headphones.svg": "c1350f018990a635ca2efb0a8fcd1448",
"assets/assets/heart-circle.png": "dacc454c16bb117cb2e4656d10e9b603",
"assets/assets/heart.svg": "f1caeaa4a1a91d5b0c79a82fb94ff895",
"assets/assets/heartfill.svg": "d74768d55668921720c5911f92d880fa",
"assets/assets/home.svg": "1ea69c6cf5322c347bc3451729366668",
"assets/assets/icons8-adobe-creative-cloud.svg": "0040d27ce5fbccb6388ea3c084895406",
"assets/assets/icons8-apple-logo.svg": "d37bd18d1ce7080920195f99ed7a5a6b",
"assets/assets/icons8-dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/icons8-facebook%25201.svg": "52f62e33ceb38c27326f045989ef0015",
"assets/assets/icons8-facebook.svg": "84912ebcc2d974a7884c05697e26939f",
"assets/assets/icons8-facebook29.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/icons8-figma.svg": "3b0fb69f67df8e1c5665644cc8f7a983",
"assets/assets/icons8-flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/icons8-google%25201.svg": "31d566b4a45a378afa9023534dff8aad",
"assets/assets/icons8-google.svg": "c4a6f894bc33df5f58e568c425bd50d8",
"assets/assets/icons8-instagram.svg": "fcd424fadf5847ad878b3554dc35541b",
"assets/assets/icons8-java.svg": "a5f2db70e7cbcca6be936339ca60e788",
"assets/assets/icons8-nodejs.svg": "e4ddbe1a57d161bfb593c7e2ba40d345",
"assets/assets/icons8-notification.json": "7733ca96776ce9497b55506c8f1a43b4",
"assets/assets/icons8-starbucks.svg": "d2f989fa19dd6490e92d9178311ff705",
"assets/assets/icons8-twitter.svg": "98448cfd22e9d87e477bbe414c66bb56",
"assets/assets/ic_minus_top.png": "9c64c8c3fcd09b5f96aba5914dbeb1b2",
"assets/assets/ic_plus_top.png": "0d6f6b092f8156248f47d058c041b413",
"assets/assets/image-1.png": "a9b036193683421f6130fb6e057c336e",
"assets/assets/image-2.png": "045246d0f86733f57106b01db13b9c63",
"assets/assets/image.svg": "a7d289ec133d67d8fcde84b9ee1f740f",
"assets/assets/image01.png": "1e472dc63645dd3b0d66e1132acafeb3",
"assets/assets/india.png": "86664733bcc1f5893697e3ca30b98e99",
"assets/assets/info-circle.svg": "7845935df4bba0afe04b5329e87fbd4e",
"assets/assets/instagram-167-svgrepo-com.svg": "2a4ea070e0bf1cb8963eb33e054d4599",
"assets/assets/Item10.png": "ddb24f39c9e5dda880b8b590c3e0535d",
"assets/assets/Item3.png": "849027c981387ab68f26ea91a1e8ddbf",
"assets/assets/Item4.png": "00855c7b7438d9a7ab8cb4d7be2de5c1",
"assets/assets/Item5.png": "91a9cb89345440a92d459d4421dafe5e",
"assets/assets/Item6.png": "1a5383b19d8faab5d800ba3b86ea1dbd",
"assets/assets/Item7.png": "d64b188b23259dee5e9024386c84213b",
"assets/assets/Item8.png": "7d67de95621c1a31460ffcb8599a1d68",
"assets/assets/layer-group.svg": "9348b771097df2f77b9305381b367915",
"assets/assets/layout-web-1.svg": "84f50e236723783a6a08233593de969b",
"assets/assets/link-alt.svg": "f19cecfcfe89b65b61ecafde05ecac19",
"assets/assets/list.svg": "df97bb357bc89fae9012082b02e86cfa",
"assets/assets/locales/ar.json": "c978933fa6c52e15d5e3c7d9305a4936",
"assets/assets/locales/en.json": "af104d8a85f9cf275c170aea7af3c6c5",
"assets/assets/location-pin-exclamation.svg": "756606c6de3dfbf8c404eec6cae3ca1c",
"assets/assets/location-pin-question.svg": "feb73785a98a6dd68bbca2ec1d1f4fec",
"assets/assets/location-pin.svg": "6b30cb244726b71cf72af44e2e7cbf95",
"assets/assets/lock.svg": "5519d90a2f3d58ad961062afabb92ba7",
"assets/assets/log-out.svg": "3be31f06f9d20d9fad8386380531798a",
"assets/assets/logo.png": "ab65ef23e9d2c4bd84f7fd6db56f8953",
"assets/assets/Logo.svg": "623168c611346fcc92142d2f8dd4d970",
"assets/assets/map.svg": "441edf05f8fea16fb04dee339efc59cf",
"assets/assets/menu-left.svg": "9ad94f8f83784cd1374557ba87a86d21",
"assets/assets/menu.svg": "6bcfc9ccfc15adf7c66dd9a1cc10fce2",
"assets/assets/minus.svg": "4f33709fecaece2a25dffd14a43df272",
"assets/assets/mood-smile.svg": "0d565e342bed1309a4e7f2f95bfc9292",
"assets/assets/moon.svg": "619de177f1128d8ae2577e732ec03cd2",
"assets/assets/more-vertical.svg": "15b6e3fe942450ff87f9e0b07c888b15",
"assets/assets/more.png": "3d09a6c4016c9234d7e4f5cd27245838",
"assets/assets/new-smartwatch-balancing-with-hand-min.jpg": "ec7c39e0076c43b4113b09a4fb912afc",
"assets/assets/note.svg": "db2991d1db3130f0c5bd54ab1d567153",
"assets/assets/notification.riv": "a347740424e15bb9441b2231acb671e9",
"assets/assets/Object%25201.png": "81796cee2203f2ec15fb5c66d0260147",
"assets/assets/objects%25201.png": "04c375bde860162945a0b40955de4993",
"assets/assets/octagon-check.svg": "09bbbd8e61f891759df37f13a72c291d",
"assets/assets/ORH91S0-min.jpg": "abb72c1a76bfd3488c1e398003f5c32b",
"assets/assets/paperclip.svg": "43439025dc66e2df8a41cd485552cf88",
"assets/assets/pen-line.svg": "01daf5d10f3ca9ed3156b01a9eec5109",
"assets/assets/pen-tool.svg": "a84eec6bc6d318f55f1226c00f103275",
"assets/assets/pen.png": "f11fd187770f08cbfe313f2893edefcd",
"assets/assets/pen.svg": "060acb2ad45b6e20a78708ba4201e757",
"assets/assets/pexels-boys-in-bristol-photography-10528234.jpg": "35c2dfe5c45502687bfd93e7d66562c8",
"assets/assets/pexels-christyn-reyes-13458334.jpg": "6d33fcd2401fafbb49c1cb2d618879f1",
"assets/assets/pexels-davide-de-giovanni-2340978.jpg": "7fc657e7643a47d6319c3ed1cc2d72f8",
"assets/assets/pexels-garrett-morrow-623305.jpg": "e6eae0b804c28163d98e7ad88e5d0dae",
"assets/assets/pexels-kelvin-valerio-810775.jpg": "4f6ad8b4e2dc53d2f6003f434d92a48d",
"assets/assets/pexels-luca-dross-4309369.jpg": "4b90ed1320d2f766d62e7d9135efb65f",
"assets/assets/pexels-michael-block-3225517%2520(1).jpg": "7265da1dfcb64d8e3358be3e6ab24249",
"assets/assets/pexels-pixabay-219692.jpg": "57fe776a052ff24835b6e98deba16a0d",
"assets/assets/pexels-pixabay-220453.jpg": "a3cb736c28947b5cc65b678cd751a77f",
"assets/assets/phone-plus.svg": "7ad6840aa67ef72efe1314ac91aefd6d",
"assets/assets/phone.svg": "9cb92c82c398f2bb69ce93280d92819d",
"assets/assets/plus-circle.svg": "340e65b259ba187ed94bf772381bca7a",
"assets/assets/plus.svg": "b7c153cccdac392ef4116fad34824642",
"assets/assets/portrait-expressive-young-woman-holding-shopping-bags.jpg": "0269f21efcec01b9a6836761a1aeb29e",
"assets/assets/portrait-payment-white-happy-consumer.jpg": "dbb5b77505ee1a912f07c572094f0ca4",
"assets/assets/ProductPage.java": "01fb356201d40dd210fcd237e4af192c",
"assets/assets/profile.png": "616addc5808d60f3fe2ea5963d95c5e2",
"assets/assets/puzzle.svg": "6ef69eaebd592cb7c579dfa20bc9a290",
"assets/assets/Qrcode.svg": "d435c1ecf38417fad870393af1acf880",
"assets/assets/radar.svg": "4842a4ca6c0e16b12e7db020b0c6c12f",
"assets/assets/ranking29.svg": "da0e85154ddcefe7b80a670f82d2b7b6",
"assets/assets/receipt-list-alt.svg": "f4bed6508065c12c61f305e8143e2e96",
"assets/assets/receipt-list29.svg": "aca54ab4a3feaa6ba3c69673f683c071",
"assets/assets/receipt.svg": "f32294df0895d0117f5209dda54afe49",
"assets/assets/rocket-launch.svg": "5c7f6ed8fffe620b6b789f374e218f00",
"assets/assets/rocket.png": "5fcb51cf10aa998c99f7e7eaae2898e9",
"assets/assets/rotate-right.svg": "ef2812a7ee6f97f2b89b3617bca37d6b",
"assets/assets/Screen%2520Shot%25201945-02-29%2520at%25206.03.07%2520PM.png": "ac761464746b5940e6468b3a1bc27bcc",
"assets/assets/Screen%2520Shot%25201945-02-29%2520at%25206.04.00%2520PM.png": "eae549bfe2efb1d480a7bae72d95d4c3",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%252010.39.27%2520AM.png": "eee7b223596b934025bfe59c73da6848",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%252012.43.33%2520PM.png": "71cda5ba2aa83c34ac1afa91586a29d5",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%25203.35.55%2520PM.png": "573a3c9b554d8035a1b32f2f620612d8",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%25204.01.04%2520PM.png": "5056ef6016c3779db17e9598df8ce912",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%252012.27.21%2520PM.png": "05ce34d7fbf26005cd55d19ef2f71f29",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%252012.28.03%2520PM.png": "894e28a896c5b434cc010a5fc986e365",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%252012.28.18%2520PM.png": "3c8c1c4a29567bd86fc30c9b0ca4959a",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.24.53%2520PM.png": "263c555099bbe783dd8b711e88b4f95f",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.45.20%2520PM.png": "a705276449befbb1720991809aaa02ce",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.45.43%2520PM.png": "95e137468f2b78e6892581b298a16511",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.45.59%2520PM.png": "cd3ff9827a7d504f7376dbaaa49f7df3",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.46.10%2520PM.png": "9463c4c187c3c726e427557bd49c237f",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25206.11.41%2520PM.png": "b628fcdb9f032e906186ea42d184df4a",
"assets/assets/Screen%2520Shot%25201945-03-08%2520at%252012.58.52%2520PM.png": "17efdf4ef6169e15ea892489cafe90c4",
"assets/assets/search.svg": "baca6c3882f1390c2d327271bcdc2169",
"assets/assets/seen.png": "f93c83f36e3d29fad1d750e77773ef32",
"assets/assets/send.svg": "4246d31e325e73c54c6d99d31338f608",
"assets/assets/settings.svg": "b7b16205b70e8b6c60e637827c76f35c",
"assets/assets/settingsfill.svg": "1f9d0f4cf2e28fc5812f05ca996a6dc0",
"assets/assets/share-two.svg": "4e742b717a3334b3c852c0443957e305",
"assets/assets/shield-lock.svg": "96a74048200ad0f01408ccbcf8e3126d",
"assets/assets/shopping-basket.svg": "83bbc12539a47e458e41aa3c17682ed2",
"assets/assets/shopping-cart.svg": "c2f02d72ddfa3cb87d9757737c2ac7ed",
"assets/assets/star.svg": "019d2bdfbb4cc93fc9aac4674cee157f",
"assets/assets/sun.svg": "f959f8a4222489ab260bcdf0c985cf90",
"assets/assets/svg1.svg": "a85db21a4096bdb4f1519feb5e4b644e",
"assets/assets/times-circle.svg": "4ca321a08561a248bf7eda70f398476a",
"assets/assets/times.svg": "c54bba2f91e77013bf715db472cc823c",
"assets/assets/tool.svg": "a3537eaaa5092e1d2f888a1340018bca",
"assets/assets/trash.png": "2603c0b8bd09d57a9e9666ed729bb6d4",
"assets/assets/trash.svg": "58926a7d3521dcfbf560e5e7078d8dd3",
"assets/assets/tree.svg": "1aa434ff5de49e6f3befd3485730f668",
"assets/assets/trophy.svg": "846fdc322059a6c61f1b39738daf14b7",
"assets/assets/trophy2.svg": "48a411233653d415d8230327c29ef4ea",
"assets/assets/trophy3.svg": "810de5aa376901182930e17ad395e34d",
"assets/assets/truck.svg": "365c6ed0f7d9bbea6f5705920d27487b",
"assets/assets/twitter-154-svgrepo-com.svg": "1ce27b189d7718720dbbf192c8721332",
"assets/assets/united-kingdom.png": "aac0dfefc080856931658ea9c760534e",
"assets/assets/unlock123.png": "705823ed110fe0dac43488fe8f08afa9",
"assets/assets/unlocklac.png": "705823ed110fe0dac43488fe8f08afa9",
"assets/assets/user-change.svg": "ef14ef03abce583a2c7de9b942492a10",
"assets/assets/user-minus-bottom.svg": "c0220dd53c41081161e29832afe1b241",
"assets/assets/user-plus.svg": "d722f28afe6003f6a7c55b141a42b046",
"assets/assets/user.svg": "e307872b84b79d980703a37ed426ac3d",
"assets/assets/user123.png": "be0c8cc405da426e4e9a9c56fb1ff97a",
"assets/assets/user29.svg": "45e85afc5d00d6e41dc27397d25b7355",
"assets/assets/users.svg": "f7761ccc01237da4fd37ce8a763181af",
"assets/assets/users33.svg": "a234122455092d65488612383ce14719",
"assets/assets/Vector%252011.svg": "89c420ca5be7a96f4f6f7b57b3fafdd2",
"assets/assets/video.svg": "52d975bc97e498377eb6365714f3b0b1",
"assets/assets/video5.svg": "ea3c736d5934d30cead4ca9f7bd21414",
"assets/assets/wallet33.svg": "1665f652d40c35d33ef18a9b37be2642",
"assets/assets/Watch%2520it%2520dark.svg": "93766d4fc9ac99faac160ad8a599dcc9",
"assets/assets/Watch%2520it%2520Illustration.svg": "44bccb8da2535641d0650c759e456c6a",
"assets/assets/wifi.svg": "19204f214c387ee78393edc40a34c2dd",
"assets/assets/wireless-inear-headphones-with-case-pink-background-flat-lay-min.jpg": "3baf18e20853292eef439b7f9637305a",
"assets/FontManifest.json": "d7759cecc1edca73c2b263f9c794b7bc",
"assets/fonts/MaterialIcons-Regular.otf": "d48517ca38285a9b91e17c2aea2044c8",
"assets/NOTICES": "2c74d9906eb3df5b08047f3940f8f3b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6f5cb164b238f69c328a527b9a094879",
"/": "6f5cb164b238f69c328a527b9a094879",
"main.dart.js": "e3ad3697a4daef7d190898bd5998989d",
"manifest.json": "a382ec8f3186886571d7db4b7ce6a96d",
"version.json": "3e83f6587ce888c154861812e44eb323"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

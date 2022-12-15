'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "716b54feee17c7de22f57fdcb251415d",
"index.html": "e0cb94f9919c1597a81ade16bd9da757",
"/": "e0cb94f9919c1597a81ade16bd9da757",
"CNAME": "73dbabd7948409a5871524c05815f023",
"main.dart.js": "28ffec0a54848ea586fb4cd38be7ed27",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d79e74d0b02d13c330046bbaff46bcba",
".git/config": "4e4770af17be6417738bb25a8addfa84",
".git/objects/61/dd790987c991e2ea2bd9ed61cf7d70246d6579": "4909d7f5091b3c04dbe58f9f4453a07a",
".git/objects/61/53074ea699f382e13ffef6a8ecc7cf81f97cc8": "5230fed75dc59e02339e2e8b80c2a388",
".git/objects/61/913e5471ba861c0f4396446be62d948c0ad827": "6c4ee300536928521637aa43f9e911f7",
".git/objects/95/14db1a229244527de59b3c2847e31283c0c7ef": "1adf4e090fbd0ddf8bfcae8d51c371f4",
".git/objects/95/a5385d2d4346d8159237681f144d6ea8f4cb4a": "9e4d83714f56837757b3e59ba360fef9",
".git/objects/59/e70df094f0d5605429113c578fea3608c74b4e": "063b48488252f3259d25f36623d41844",
".git/objects/92/e5e161ae6329753aea60dcf9616d0799b6efcb": "11db801075c8d0e941c417be532a731d",
".git/objects/0c/8ef134a36bcf40c0bd6db44f86f1dd01ac76d7": "5b6e75762244f65ff443fe9086637e2f",
".git/objects/66/0084d3d9478fb45584352f6f2b7b7aa9267550": "cd55f84fc3641181cb8f4a82387a9c9a",
".git/objects/3b/b47a69387ed0ea6025df6fcca1e41b77ea7ba3": "cdb03ec8ebafc4f3f7819db71d41a1cd",
".git/objects/3b/a6e62d16fa83a5f8d8a335abe4242aab616f28": "7f71164bc8672abf87d4d8d44f2e732e",
".git/objects/6f/fd50d812a1f2687d6af712a515a932fb4550f2": "8229e990dad7dbb206563faa0915f2db",
".git/objects/03/9b90046cab9feaaeb8fe36f19b152f01d0e010": "1f6f8da0affa17a3fe9c2a4feb292b84",
".git/objects/32/e05f6bf006357b435a3221a19c33a69075fe32": "696bf8ae7d35388c72d5c8e5671c400b",
".git/objects/58/4fd7b3d097953877f036728389b71493378949": "82407e69050cd7bdd99bec1996662f5f",
".git/objects/67/8c4477c02fd06b1e7a2a9af4c22e0a00d8504b": "58dc13e91021c6ae4f863af269a397b9",
".git/objects/0b/79cd39c10d5f6509f8770d1527d528e1958382": "d6a81818b16e7101e80369be33749a33",
".git/objects/93/bb3a328507c38ba240bdae363b9f0d173d0bdc": "4a37426f9e41ab683e8b92497af4b840",
".git/objects/94/294cf91294273dda4bdccb04855791713a1b2e": "efb7ae9ad59bf6b453668ed7763532d9",
".git/objects/0e/1d82b6a416d4cb59f17a4d21afe7e4cf73df7c": "14df9d14c8eaeb3327f566a6fdea98c4",
".git/objects/60/f9f6c8fc009914e68b2d8376cbe207e346e6db": "19e4fae0b98e208430a4d496ae0bcbf9",
".git/objects/34/f156158815101a6da6795d8961417446674dc0": "88b614d556fd46cfe81b49ae8a14b2d0",
".git/objects/34/81e4ff3868753cddf6e50b5f2ac4494428e983": "773838c812f63eee6cd1622d59f70ce8",
".git/objects/34/88e4918b13df04a33728cdb12632eb47720588": "0bf22d2f5e9e1559ec085d51e9f906f0",
".git/objects/5a/eb046bb3db7c146358a6df80ed66d02581ecd7": "c0248561b7cef376e7b5fdd2f4e2f106",
".git/objects/9d/761b474dcbf17facfe40c952b12fc5a5a23410": "e5c97461525cf3767e7ff0d6f19f7d93",
".git/objects/02/1eef320bb23d43f8d422a9bf1e8667c4a363a3": "bd590aa660276a5f80309d0a766851eb",
".git/objects/02/01fca283b7c01e0fb9893c86aebb0a30f96fdd": "07ab83d8662d992ab7a93ca4409c33c0",
".git/objects/a3/49654b0dd1e194e83f679a5bce8acb0db5cc7b": "52dfbc8544ebf347e07f9ae445bae415",
".git/objects/a3/a242ecf4316731b46eda2d95c3b5c732d8034a": "b9206af2c846709424e9d14108bd4726",
".git/objects/a3/1c04af5cfc1c0a37f80f6bd4bcdac70e0e70f3": "901f7c3c196186b5e75e28b88b0fb78b",
".git/objects/d9/a49666b8d00bbc04c98ba0347c14225eaa0e33": "7ac57dfe25788b83272ca4d56fa58d01",
".git/objects/d9/f89d463d670045a73c60bc068ed7c9a9a0eaaa": "15240d3b3a1b5b5a521b070bd66100ea",
".git/objects/ac/88ae9ff07613ab6be77b78ed744aa01c13e5b2": "dc5dc88350ac221188437d469d172e25",
".git/objects/ad/eaa65635962e071ecd4e0073d59faca2bfe3bb": "e8933acd8fad29c8b978ae260b131f49",
".git/objects/ad/5690992dd3893e18fbb4c5cb23f08fe71b8a81": "1451db46f63ebffa69300cc462f8ecee",
".git/objects/be/755510faaab8ec50e85ad4b476664a1f28be97": "470512bb5997d305154e497670b4c98c",
".git/objects/be/4aadc77938888670a4468867d18e5d9969c73a": "1a719e9589b92225f9791a9b1f58a26a",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/da/5a017d4098fba0b27779e56b32babe46077c4d": "ec7d970dbf4d4d7a76d6e72c1dab69d7",
".git/objects/da/c027dbfdbf01db042431f9272171942752a5e4": "645add4ff334ae38164dea3a251ff361",
".git/objects/a2/3eeed747236b4f98fbcfb2acc600cf1a81dbef": "a5c4308bdd129ce366d6b346dce4540d",
".git/objects/a5/029f8b7a1c53471992e22956bac0268b511fbf": "8cd72bb3c0fce52a5f35903792926dc0",
".git/objects/d6/49d6807aa402a8a963e4a64137a198e1c027f3": "e85bc6806202c0d83c648ea16ccd104e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/929671b0cec0e97cd3edf2d1eaac4ad51c0762": "52f08e7ededb4fd2ae57546866c4bdfb",
".git/objects/d8/c03ac7b79c3c1a435f019768b5ade3a363d779": "00a6c49b761d17728aa24c6bfd1301c1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f4c7837703a3fef07f1b055f3b8fab662656b2": "6ebc89443e1e9be085fe6902ba643d73",
".git/objects/ab/e3a7275b156b7270b932b75f16a9b43ab4037b": "806e8751b24ea1f2c477383749e0962f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/da6231969878907bfc6e0e16f3f9c590ee4f09": "213ae342c5466561f414022668320e13",
".git/objects/e2/a4bc326cbcde31947672df3e866ee429116a9b": "7607d495d45a1a04bfdfb831a9534556",
".git/objects/f4/5ee8857e1d45e2a5d502426b660c72681ad2bc": "ee6cf1b813a08f879024858fd6afe801",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0f6049c7c89a5f6625dc0f722565b7917d39be": "df5c187ce9cfaae51b90026dd4a8f500",
".git/objects/eb/6707185b19a402174e63a3a39ddf776dafb831": "1c3f17a6a2960075adc52faa4f7c04aa",
".git/objects/ee/607bd9183484fbedc5435f54b2fc11fb977348": "8506e065e80d7c87ad51b383ff516cad",
".git/objects/ee/0a4a7dea5836f9d8f941d31466ef53f15ca6fa": "99b98b8ebff31ff3eea415698f1dd299",
".git/objects/f5/a854563b685c2fd13adab697e29f7f89c528d7": "c23484c0f59ac4dabf31b1de00ecf8ca",
".git/objects/cf/7258e86905b3b31246857eac793239ea91e182": "b0255bc0b3fbea937c090ec8d1e8fe56",
".git/objects/cf/7e01616268766b0a209a3e0b51023a4f4d296d": "8bf248c08a1e6f9ab3395f80411941ad",
".git/objects/ca/1a33b3ffe90764687ea78759f8f7268eb88930": "627c1fed888aefa6f49c55b1bf167477",
".git/objects/e4/2d9dbaf763151a3666b269a493a3d1099167eb": "30834d150047d8bab2a51881ebe067c7",
".git/objects/e4/2bf1443bfcdda919b4654e9b506423ca2ccc4d": "337c7ff3602d69e4f9536e75561c6d6b",
".git/objects/fe/081af919a36149c1a5ceb2d36975588ba156c7": "107075f32f10f2c1c01057d8f2a293cd",
".git/objects/fe/fe78c63af1a58bf43d226bc123c89ea6af2341": "58700f791d20e809f935884fdc1cec4f",
".git/objects/18/d293132081ffa34e0b17a91dc7e6b9c44b130c": "39658e31142b9663af44302c7d456664",
".git/objects/4b/62fd3255dfb4e5660107fdda0e22b16570c917": "c9d9079da6ebcc7d401469c97eeb2550",
".git/objects/4b/c82b58a7c59ac77ef2d5bcbb5b0dddff61f73c": "e238b1062c349389bd17a9601742febd",
".git/objects/11/74a40459647dac4f0bd9d9e4acf63a26d17122": "1eb4d611eaab8dac33f5ea7ff7873d83",
".git/objects/11/ab23d097c311be3d1ec56aaf79fcc215bc21c9": "c00adb9be963c8cfa2007c9ba5f24e08",
".git/objects/7d/3bc76b462e9e3ea06b53bac4946be0d6b0336b": "e49bd3dc49cbd2a5b31ce099677cb8f8",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/5ef55dbdabb279567d5b8ea614d4b2cd8f367d": "7ce56eaaaba8fb06d109258feb5e18d6",
".git/objects/42/3ce1b0292125f4b2ab961f500134576a9c21e1": "5028297a8b79241c2741907d1e88e040",
".git/objects/42/5b7393fe888e9883b9145e451efc7a1b64220e": "f38f99e1b610461fc390133384db5003",
".git/objects/80/b9c3df6018e19c514588b1101f3df9bd284a0f": "e9fc3276df0cdb06a0ed0b0d552dd0bf",
".git/objects/74/c639f1582fbf4896315d7c0e594a14ece7a9b4": "2612937ebba59254e1cc511d22c56a33",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/528936a2502ef4850a36a825f983424476c145": "43f61ff0f44ad2f79adba6914e8c3ed7",
".git/objects/28/3dcc0b23a7ecb6a29d22a709b77d7b128179db": "dc9fa5283f6aeb917c9deeb06d396a1d",
".git/objects/28/43c21863105252644e2a403e35bbea52dc0cb0": "c3566b48d263ebe06f689b947c981ec9",
".git/objects/17/5c6bef3f5df6da52f957d4cc863c6864e17229": "a679473473231cd19f1739850b793d4b",
".git/objects/7b/fb6dca0d28f0453c6ee83f3848bdc13927de94": "52dc6ba251d57b2a32aef69df01af29e",
".git/objects/7b/9931412d9ab84c7dcfc7c18fd37a2392381553": "9eee2dcb06e61e3a3ef8963dc2a4de89",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/86f591e1ab1b95e3ff319101f8541873c21c20": "cde28b92d283de6a15d8df11e9785f2c",
".git/objects/4c/d8e93350bad8180dc60b592e3c8c8abebfffe6": "8b0bb667468fe2daa5717f8514e8b410",
".git/objects/4d/db8914c5627e9b76f98e1060290f788e12a1bf": "371fcd7d09f49092148fae6782f0e994",
".git/objects/4d/d8f750060d94d19661d935895faacade950e18": "06bd59957de02d9f319ea748f6082d8f",
".git/objects/75/3464d681eabda027c447161f977585accf47df": "653dd37b5f7d1be9ec073625912f8f7b",
".git/objects/44/fb9c41aa783d2194c339b88da2d5735b21252e": "1365ec1a236c1519e4e495c10f4358df",
".git/objects/2a/85b7fec559dbc7f13dc209d3378eea10757dec": "0eba598fdf964b31d97bcf25ed2d412b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/01d5e21446ee2b8b5519517e89ef662e04c99c": "af05f51a422ba171f086420c493c6098",
".git/objects/9f/d51d35cb7571188061dfe7fe7b008af481b533": "7e48d593d61d9d8ec7397f47b2ab2eba",
".git/objects/9f/14bd756b18ae29bf6c07188703962365a53a83": "afc977c4b57ae2080c2a1ff9b4578b3f",
".git/objects/9f/06742af53fd23236ba057610336999a072fdf1": "545d2fc37bee87dbe2c4a1fc41005619",
".git/objects/6b/5e3a7a1d66292ca503c94f302ad338f162d819": "92ec81f84bffc88084fcb9f3ca155182",
".git/objects/38/5b3f38b4c85244b3f5413635de40c76c6d8760": "3042c86e0641d5e0e5e95dedfd3692bc",
".git/objects/36/e2306a3039e86adfc35a3c59177c5568382b7c": "15d5691b3a9ff1ff6a0d0e7b1fc1bf6f",
".git/objects/5c/fa23e6d91695c2a35847fcf0703395d499ec93": "a12342c24fbb9011cb44a25926d7ff54",
".git/objects/09/03a6c5dd8a8b13074e5de60ecd0bb4d35dc768": "f1345f590bf41f3358d9a2115601862b",
".git/objects/09/e7642655fc576ca5f862f106f192d4acda1626": "06b7a42e6697dece2b3cf4ce90440929",
".git/objects/5d/c363e53b3def2aca8e099b115bb51bf1634828": "2c543c7f7a85349e8cb63ecaa5cf6801",
".git/objects/5d/f5b0f9ee6f31d244fc1d7bd131c152f1b9d8f7": "ffc3593bec51ab56a9a39a0833905b8c",
".git/objects/91/973a7e771679794bcf656fe1466c247f3e2570": "3f81538f3f560b48f3365a7cdefc4cee",
".git/objects/65/b2d2ebb7daa622e5e3a72387576814f7a3f21a": "0b9ce2a68661e34f67817189e430abc2",
".git/objects/62/4d3dc10d21e0fff2f482210ed5baae70355ee8": "e703261eae047544ab5338e8263df1cb",
".git/objects/62/4a352721305f6d2cd22efe19c5c8f6cc684c8e": "e56c58d8bcf4e242a5832775187bbe0f",
".git/objects/96/aa695a2922f2b105c9b69e89a80d22e4a4c0a4": "ddb69ff45c633971a1cbf936b5da2709",
".git/objects/54/a3ff559c5281aa683e4cb46fe0c2572d279d0e": "5868755d26f51f6949ade496fff4c409",
".git/objects/54/c31db12b951eaa1b668ea53bc318c6701570af": "404b6eb59ef694c2dd9b811040dbcbc4",
".git/objects/98/8606877cd9dd7acc06e5360564dfa7878b1d73": "6d73cba458784bb4c48c5f6a80c9b65a",
".git/objects/53/bbe8de3ff332cb860058772acdbeec68dbfa9c": "b24be53f8032c61c226f35f50549682d",
".git/objects/3f/a0fc29724a33c6bf4f6d5a9b94e35fdb2f42cd": "cedb9eb90419b83dc825ccd86a1f0e65",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/d8575942b9633ed87c5ea94d7d54c2dc92c987": "7a19f53935f69c0a796a85098d9dc430",
".git/objects/30/6f31b380efb341e34b2214cd708df5f92f6681": "ac96c01aa7a9c084a782bd48166de40c",
".git/objects/5e/61511ba2c46043b3a446a608b7f13d2fca9c42": "8f5303d51a86c2a9bdb398a17ff6ca77",
".git/objects/5e/53f9f04dc1f6e47f98806b8d6b9eccdfaf102b": "b9b8b548497927ac9002945c46906783",
".git/objects/5e/d090f690c401f0726ee4cea07f1402ed476b48": "b2ee56b814a3fb485d68e107376d445d",
".git/objects/6d/e02d046dd166625c378c83dbe81bfdefc06df2": "5322bc98de26eb925bbaabed68c3cacb",
".git/objects/6d/d20dbdef06869e53f28c678d7eaef70179ecc3": "df23037a7b21cdbb330dcc8e1ea39c5e",
".git/objects/01/2ba9238c5ad733157a942bfae1629a55bcfb61": "272781bd2092ca1bf8135f3b9366797b",
".git/objects/06/cd47f12c4de21cd806e8df784a885f5f6609bd": "889bdc0b011d4ac3a80a470e85315b79",
".git/objects/99/3ea1754fe03155c82547e1528bfc3ede97d89b": "d240c3a81322247ae07ea5a8beca9cc8",
".git/objects/55/2a87f9193876d6004d7d462532207c1a93af37": "2392338138d300e17336c1eb94669a10",
".git/objects/97/e8831d79667e7e2cc46983f74c1766ff68251c": "0a8c2e31be47261fd54ddef4a36d62e5",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/9512971b0422e7251411b47d5b102abaed6f68": "a1ddce85cfe338943b868f5e9fc5a831",
".git/objects/0a/e779bf67a58a43ebd51eb00244811031e2dd87": "8bc345788e26c9aed8f2bfa32f1eeea2",
".git/objects/bf/d903287bf135ef5113fc0c33e9da4f77ced833": "c03bf483f790f7280f6d19759aa90d36",
".git/objects/bf/8740f179ec9a59f846e293eed5f6a2d761a5dc": "f060ded52467a7fe73e808c1e0eb0820",
".git/objects/d3/ffe678425b2b207e0a572f965b970999e47cc4": "702b454cdf5982e46ba85cb748ba3342",
".git/objects/a0/8870930c9b92cd95e6dd4651dd12ba7b1a7c07": "910cedfe1b56f8c62052d85717801f21",
".git/objects/a0/2a70d1d90fbdcee750436e0d033bac90a66411": "ec065d328abe0f4e6ac2439aaaa37c70",
".git/objects/a0/1c01f68d39a3585590bfafb92867cf729ec06b": "699b060e8d4194c06adf01d3e53c27e5",
".git/objects/a7/0ab953735ac3cec7cfbd0bde794fc5fc423148": "d31a16f597897ec89f065a1ef2594cb3",
".git/objects/b8/011212e238acfd027bd7a8abb97011a15edd38": "c13e1c7e33ff5deed20a89c5536294bc",
".git/objects/b1/29d6a976ebe67a2e46ea90e12ea518fe8a778b": "9e7ad95d8b3778cc10e4be26468ad622",
".git/objects/b1/0a1ac9b6d2901417f10c5120d39e408c91096c": "c38ad31eef9725716fb158424e6cc133",
".git/objects/dd/e5d285646ca18a66927c36c943b618c1a01cef": "01570c30ed32869d4e5b85df09c65a1e",
".git/objects/dd/33dd4d1a5a05d72b51cf5b7fd591c66e601c02": "dd9acc87ed39a862872fb400a8bf9898",
".git/objects/dc/0fabafca174cb66f38b3722c761763daf73df8": "27172e59e51ed0a529ac1a7012660b63",
".git/objects/dc/f14f87d5d9b6c941498454e6f6c440077d9232": "29302cc5de750824f7683f70e7d1856b",
".git/objects/dc/7adcb48ae27e70e31f760560133ab635305852": "94a1e7f3c885f98d884ac39186988e47",
".git/objects/d5/cb1c807928f98a03c6e0c7af79ee2fa3a9739d": "0ac245ba3d186229dbba241c610570b1",
".git/objects/d2/f658164d832963546eb870c997a11020d75459": "da746c373497cb0bfc53c853a1cc2956",
".git/objects/d2/1b195ef88e97b64f4d711aab3e4cf59cd89400": "c24e35a46507b39421db06ddc54ca990",
".git/objects/aa/037e1d404a57248c1431e225a7c0a68c67f0fb": "fcc8f9915a0543636646deb0f9cc59a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/44fc2f319167f50781902d40c5a4be3275f310": "28b25aae16590062f3276acf0c643c0e",
".git/objects/db/cb543f8e1f872ca7865c1bef8697911e8e78e4": "2ff816ac696dc3fd0164f3f789408b22",
".git/objects/db/b789b65b18bda7261bdc0e8389ad7a42a48ba4": "611656cc63357fabcab01efa775f5e94",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/d78f87963236df0ad43be8c333c4e0c05b67f1": "d1aec73fe85297cb930803aac0f4fe43",
".git/objects/de/36165255e07e37d21caf4f350b253a133c376e": "36274584d34651f3e48687b0117577db",
".git/objects/a6/96942e6429898e409a7e36ac19157e50958f06": "f531dd08f304210ae96a979288b5527a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a9de499eaf528abd09b93f0fbdd969793c7869": "532b6f2cb8e4e3f3a536c140af480019",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/9b9f99901829e78f693bd322db4cc839f9abc0": "9dcbaf39f7db3fdb75c05bd3b5b1b915",
".git/objects/c4/3ffac77c4131d7172238b537cb86d6a522dbac": "631795096bcd5295ada1ff57ee71adb2",
".git/objects/c4/c234ad81ce8b6144013ec83dfa38b7e548c9e3": "c2f048951a3556eccef4bb2ad3f8d5e9",
".git/objects/ea/15f3991ee223f1da8c73a0355733977f038b7f": "18ad4cd5b39b200d83ca0c42a51c40ab",
".git/objects/ea/d8a82d675edf622bf62a90c3364962e1ffecad": "5189bb7b6a1f8388c67a4c39039a281f",
".git/objects/e1/addb03680f8ad0ca93fa7d94f7dcabfb3db3f4": "f49bae0181cec0cd31f345df7df5f5b5",
".git/objects/cd/e9b53a6ca15bb1297eed42f7fef3026c647160": "47c4fb2a5ac26548f38aa433c60a6935",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/1282db84b230a913239bcd0050f956f76fc16b": "9cc2c5502bc34373e6cb5821d2f3c095",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f7/723706f096f621ef068b2cc29be8e13674a705": "889255c09a348d2e99f0f783fad815b7",
".git/objects/ff/cf60203bc9d30b20dc670d50a0593e5c73e074": "9e44dfc45da876b23dd0ca7d55114fb6",
".git/objects/c5/cbe7a7e3be84d0046430a9bcf2658ed8d1c4a6": "a7c37ac4a9c33ed02324550214aa71c0",
".git/objects/f6/a71b567b709a938da10de334b4a7505ea88f42": "ae4608e326fddba1506bce54cccd9066",
".git/objects/f6/c7755012c45d9aa12fe6735a271b224723dc88": "5e81354b6c400e01b04bab81fda77d86",
".git/objects/e9/ea04687844e41a2da02104ee6b2f2dfe86329d": "5241ff7ae37a349600e9af51b835606e",
".git/objects/f1/5e52477364a16b3f849c3ff5b728f48b00336e": "781abc142eade5365055908b9abd60b6",
".git/objects/f1/856ba4c6e6f984f6f987f74a6e3a57991798ed": "86d4ad5c82ca6e55f352b661a17acae9",
".git/objects/f1/886cec8f0add08f696ef7d851693ba1569fe97": "86e04edc578ad56d2e5b61adee44047e",
".git/objects/cb/834cdb8b423d93fa50cc8c8307256172cc265d": "702ebe0edc6f941db0b17fd6737e70bb",
".git/objects/e0/9ef5eda3784b2e9d9b9d8b54dfd76d6d35f222": "46b3fa7d002d6820c7c346806d628aef",
".git/objects/e0/da60ba096433d9af1c7025d2ffb9c521f190ed": "7682c4a69ed4969a020dc1c71f17cd03",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/48debe636ffc81f9bc793d56c9de28167bbb8c": "9869a1be5be23643e667880d1840faad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/87479d788c3db3c4eca7e31a29734d65507657": "9cb40c5f24a9ba8270b92a5799a03834",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c8edec967ccbeda61a9e1193b267aac7ca5930": "f4d3344388a79cfaded9b7a13567b61a",
".git/objects/2d/d7fca08217cec8c62384cd76ff52e9b24c9867": "0fc3ad9749140eef3163330efdf0a775",
".git/objects/2d/eee22519bf8405235d8229ea9740ebae015385": "1e2d3d17f8da61a86449b968c8f414f1",
".git/objects/41/fe2b760c000efd69bb8c5808258f7b9334d29d": "7fbd01d7f01661d12a52c31f8c5c0594",
".git/objects/70/45ee311889c257e4e8d06e4c3741beb7d932d2": "0fa5ff824943824d9b3f926b2f790d90",
".git/objects/1e/7fdd15bcb9ef323063fda97d100d6403e22459": "49ab5f40aef32832c501b6ebd81d5a57",
".git/objects/1e/7dbfe19886ff6a66ffc4165a3f857e309411cb": "7355d6f889bbac66d232eff9fcd3dd3b",
".git/objects/84/7c19c18fd4fc0c139018118011abd5132f53ed": "1855187286d029dfd4f8765fba4c3f9f",
".git/objects/24/05b88fa753e06e1147c24a27050176479c624d": "ebb30746330aa50f128b6cddd30ad46a",
".git/objects/23/d5ca71f2bd86efe21f120c95f09ca61a15774e": "9219f9698b0f5c7224fbc06c919bcb58",
".git/objects/23/d0c8fdba8db4f18d0ecc2683fbefe82c6c09d6": "2b07ca9360df5989796b502115d8ce1d",
".git/objects/23/8df02a97a6031df66b947b3e8d224ce06b195d": "7b8f9ecc7c67b3054a643b47d944254a",
".git/objects/8d/5f5ccf7c8707a1cc73389d4e2e5d31bb8a5ddb": "8cc336ad5d0cc8037125d1bc393f2ce0",
".git/objects/15/7480dc8f96d257c2adc132aeb0819a4de3ec55": "517d9663bff3a70172d8c0d0a1effeaf",
".git/objects/8c/aa3ad40285b9f93932901ac2d155f02d490657": "bd47f66ae81bcc854a72f8e01fb266dc",
".git/objects/85/3957a0b032053f497e61e33507a491ff06d667": "d406ce8941aae3cd2c558d7b47fc3fb8",
".git/objects/85/09360c4b3adb1efbba36db1d4255832c8960f2": "a50e97dd0a160adfa827d033f1a45e3b",
".git/objects/1d/4bfb6925416bb98907c5483e6d6bbc494641fb": "df8a0ef0f8d1ef573792895d4fdbfe93",
".git/objects/1d/ae67cae2d7ed255e4944830a7cb403ba7e0ea9": "25179a4fb79933b75e429ab320f30d19",
".git/objects/1d/725885e20d72929086fe60b74a21e616fc57d5": "f7999bd84b31a0e85e15eb57278d4578",
".git/objects/71/6107952b3e83fafcf8f27db91afef52056a19e": "a8a297d8ed67c5702c029bac53e8affc",
".git/objects/71/178bf3ad90b50eba3414b8ec29334ec26c2429": "fd30c49d572de79b944592e9cf640816",
".git/objects/1c/257cdef4b901b69a41805f7ffe87be621f0317": "b313b5b6acd604e1f2742b4e85451fde",
".git/objects/82/9c7438ea74598f447d135ca942330a8436d383": "0bfeab073b860efcc1301a28218a6520",
".git/objects/49/acdaac74e0c6c3763ea6a0bc3bd7ce0847f622": "767e9ae3bcc46267ab6f0a6445e0e899",
".git/objects/49/44a85c2228efe186c65c26d00a89d352222dc0": "7ffad6e15cf03170f1d031f30776ed18",
".git/objects/40/ab068b041abd92d776a2a61fbfb5bfdb865474": "f3ff98359e50d392c4b71d359e1dd7e8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/57ae3ccef5f9f107f91ebd57df94d5ad1d141d": "0edc40ffcddce920b33068851662db67",
".git/objects/78/c35b7793cc0af8b160c2c3ad5a6f4b2418e13f": "aaee9a00b98e731272b207ce3933099d",
".git/objects/78/38bb6414878ac1792e56c1a401ad4267cdc313": "10954cfeef8f72b94a10b23d318ad163",
".git/objects/13/cbb5bccbd74104b2bce81b2383a0601753a7e4": "df4ead8b9966993dea29dbdc04f9e85b",
".git/objects/7f/219f5920548ec773ff9c2a1948feebc1b3f6fd": "2f609a8693737c0b261d0a394d052d96",
".git/objects/7a/b41ae3f8db011b2db50bb8256503e229c06697": "89fa5c50c5964196d912e77e049d9e88",
".git/objects/7a/1ecead002ef1c92ee57423987be21979d696e3": "8a6ea67bafa53a626f611ea7ad34c706",
".git/objects/14/c0e0ff071b4e077ace1689689b6dec92b80297": "63c462fc4c4b5052a21e4f596cfe6e0e",
".git/objects/14/6f06566bdc3769ea924a6009181900fd85f998": "d5329218c140ef2c950e612d984d9f03",
".git/objects/22/d3696839743eeed476c4a257fd8db2230121c6": "73ca15c43143b38d69bfa0ac5d212398",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de105f1ff152ac317e930cf74ae2be8b",
".git/logs/refs/heads/main": "de105f1ff152ac317e930cf74ae2be8b",
".git/logs/refs/remotes/origin/main": "0f83db85ef99d30b0b375aa9607de242",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "49f5829e60876fb0ab28e0dbe9f850fb",
".git/refs/remotes/origin/main": "49f5829e60876fb0ab28e0dbe9f850fb",
".git/index": "12d4759b1f3462dce748085bb3bbba6c",
".git/COMMIT_EDITMSG": "0f1febe1aa6b456472537409464bb28b",
".git/FETCH_HEAD": "22aedb4e714de74024048237ecc2c586",
"assets/AssetManifest.json": "f0af835c69f44cbf3595992324d7ce4c",
"assets/NOTICES": "323d958471a30f2bfbc9125f3cac893b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "95118ebdb554d70ae313c8fd522454c0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/video/NR.mp4": "25bec0a61641043f1cd9a5ef7e53612c",
"assets/assets/video/NL.mp4.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/video/NLR.mp4.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/video/NLR.mp4": "ea243ffad70218fa50d727f13725bb64",
"assets/assets/video/NL.mp4": "25c89c83cc12e86f319c0db05a1361c5",
"assets/assets/video/NR.mp4.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/calibration/1000R2.wav": "53cbe5cfdbc7d18e711e7bc65aca3771",
"assets/assets/calibration/1000L2.wav": "4828d296d8994defc612958f2e6691c7",
"assets/assets/logos/mmiv.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/mmiv.png": "5cf865b0a618d89366cf3e2120711b59",
"assets/assets/logos/github.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/github.png": "5dff3cd71c914e14408ae778cb0528c1",
"assets/assets/logos/weblate.svg": "39d364dbd134844929ea10a2c598eaa9",
"assets/assets/logos/fmri.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/uib.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/uib.png": "ab31705349850daeb97167c18b290d72",
"assets/assets/logos/weblate.svg.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/fmri.png": "68ba33ffe0d09f9e07217c0ae4ff04ba",
"assets/assets/languages.txt": "e53b64edc41116db6d6a1723a590c6c5",
"assets/assets/audio/eng/Da-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ba-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ba.wav": "0d9e52490f202432c2b85d36d13bbb6f",
"assets/assets/audio/eng/Ga-Pa.wav": "b0056a69bb40bd7a6b16dee97ba9e46b",
"assets/assets/audio/eng/Ka-Ka.wav": "9fef3bf56770ede849e33053554ac4a5",
"assets/assets/audio/eng/Pa-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ba-Ga.wav": "a827d5a0c0b7605b012510ac230ca677",
"assets/assets/audio/eng/Ta-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Da-Ba.wav": "53aaf66543194400e72410fe101c8f0c",
"assets/assets/audio/eng/Ta-Ta.wav": "35f373770588e545811cb384818c86c6",
"assets/assets/audio/eng/Ga-Da.wav": "2490f71075bd1a22a2d923a3452a38b3",
"assets/assets/audio/eng/Ga-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Ga.wav": "38cb5cf33f3e4778cae25823b58695bc",
"assets/assets/audio/eng/Ba-Ka.wav": "0f2d2f7d6cdab003ee03c2ae47b24962",
"assets/assets/audio/eng/Ba-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ta-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Da-Pa.wav": "a91baae624b9463c6f4af3713f2121fc",
"assets/assets/audio/eng/Pa-Da.wav": "6e334de1e64263830dc64ef188b5e484",
"assets/assets/audio/eng/Da-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ba-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ta-Ka.wav": "4a2e23a3dc305fd4a88095319f803ced",
"assets/assets/audio/eng/Da-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ga-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Ta.wav": "cfcbd6e226de2ebf7e71318a3004dac9",
"assets/assets/audio/eng/Ta-Ga.wav": "64738e2deba311558e41a19ee13c19fc",
"assets/assets/audio/eng/Ba-Ta.wav": "5021efa528bedd003215e6debb141e1f",
"assets/assets/audio/eng/Ta-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Da-Da.wav": "89e2af97bd8ad37151977b7291313d4c",
"assets/assets/audio/eng/Ka-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ga-Ba.wav": "d1755c8c360ee02dc4fe2c2e69da82a7",
"assets/assets/audio/eng/Ga-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Pa.wav": "fe251b779e1329157986cf6765929981",
"assets/assets/audio/eng/Ga-Ta.wav": "84e9629ea86f5296feb8da9644b2eeab",
"assets/assets/audio/eng/Da-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ba-Ba.wav": "5ee19ebfe3abf57b4ba25f21b5ef9f6a",
"assets/assets/audio/eng/Ta-Da.wav": "e2f1be83c514c60e787726d15d6b1877",
"assets/assets/audio/eng/Da-Ga.wav": "d5fb4763885ca71c95ea6243d0b90898",
"assets/assets/audio/eng/Ba-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Ba.wav": "edf7b12319057105669563ecfbc93907",
"assets/assets/audio/eng/Ka-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Da-Ka.wav": "ffc953054cf1854b5dff033b49afe237",
"assets/assets/audio/eng/Ba-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ta-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ga-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ka.wav": "8cfd16e262480a065e7ff0b57c34d7dd",
"assets/assets/audio/eng/Ta-Pa.wav": "83511adf5c2b723b6eca1303419e288c",
"assets/assets/audio/eng/Ta-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ga.wav": "d735fd37701c6c8f7d47e390038006dc",
"assets/assets/audio/eng/Ka-Da.wav": "1d519a48ae0f564d7ef2c7ff83f6596c",
"assets/assets/audio/eng/Da-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ga-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ga-Ka.wav": "6e89744cbc15baa21b35cf6c6fc49d68",
"assets/assets/audio/eng/Da-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ba-Da.wav": "addad1aef67ea399f1ad33bccb8be13b",
"assets/assets/audio/eng/Da-Ta.wav": "3d7b4d8cfc20335c7835ce165c816c71",
"assets/assets/audio/eng/Ta-Ba.wav": "b5af8a176e8888fb599656929b9c65d4",
"assets/assets/audio/eng/Ba-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ga-Ga.wav": "fc9467598d6a0f4100e45ed08133846a",
"assets/assets/audio/eng/Ka-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Pa-Ta.wav": "c99ebc92063b5b12f09540da73c9ad2f",
"assets/assets/audio/eng/Ga-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ba-Pa.wav": "a742a4bef5c0f9e52c95c96460494461",
"assets/assets/audio/eng/Pa-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ta-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Pa.wav": "92201496ed8f307e83c9ba9c1dc9401f",
"assets/assets/audio/nor/Da-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ba-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ba.wav": "a742a4bef5c0f9e52c95c96460494461",
"assets/assets/audio/nor/Ga-Pa.wav": "d735fd37701c6c8f7d47e390038006dc",
"assets/assets/audio/nor/Ka-Ka.wav": "9fef3bf56770ede849e33053554ac4a5",
"assets/assets/audio/nor/Pa-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ba-Ga.wav": "d1755c8c360ee02dc4fe2c2e69da82a7",
"assets/assets/audio/nor/Ta-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Da-Ba.wav": "addad1aef67ea399f1ad33bccb8be13b",
"assets/assets/audio/nor/Ta-Ta.wav": "35f373770588e545811cb384818c86c6",
"assets/assets/audio/nor/Ga-Da.wav": "d5fb4763885ca71c95ea6243d0b90898",
"assets/assets/audio/nor/Ga-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Ga.wav": "6e89744cbc15baa21b35cf6c6fc49d68",
"assets/assets/audio/nor/Ba-Ka.wav": "edf7b12319057105669563ecfbc93907",
"assets/assets/audio/nor/Ba-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ta-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Da-Pa.wav": "6e334de1e64263830dc64ef188b5e484",
"assets/assets/audio/nor/Pa-Da.wav": "a91baae624b9463c6f4af3713f2121fc",
"assets/assets/audio/nor/Da-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ba-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ta-Ka.wav": "cfcbd6e226de2ebf7e71318a3004dac9",
"assets/assets/audio/nor/Da-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ga-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Ta.wav": "4a2e23a3dc305fd4a88095319f803ced",
"assets/assets/audio/nor/Ta-Ga.wav": "84e9629ea86f5296feb8da9644b2eeab",
"assets/assets/audio/nor/Ba-Ta.wav": "b5af8a176e8888fb599656929b9c65d4",
"assets/assets/audio/nor/Ta-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Da-Da.wav": "89e2af97bd8ad37151977b7291313d4c",
"assets/assets/audio/nor/Ka-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ga-Ba.wav": "a827d5a0c0b7605b012510ac230ca677",
"assets/assets/audio/nor/Ga-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Pa.wav": "fe251b779e1329157986cf6765929981",
"assets/assets/audio/nor/Ga-Ta.wav": "64738e2deba311558e41a19ee13c19fc",
"assets/assets/audio/nor/Da-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ba-Ba.wav": "5ee19ebfe3abf57b4ba25f21b5ef9f6a",
"assets/assets/audio/nor/Ta-Da.wav": "3d7b4d8cfc20335c7835ce165c816c71",
"assets/assets/audio/nor/Da-Ga.wav": "2490f71075bd1a22a2d923a3452a38b3",
"assets/assets/audio/nor/Ba-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Ba.wav": "0f2d2f7d6cdab003ee03c2ae47b24962",
"assets/assets/audio/nor/Ka-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Da-Ka.wav": "1d519a48ae0f564d7ef2c7ff83f6596c",
"assets/assets/audio/nor/Ba-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ta-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ga-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ka.wav": "92201496ed8f307e83c9ba9c1dc9401f",
"assets/assets/audio/nor/Ta-Pa.wav": "c99ebc92063b5b12f09540da73c9ad2f",
"assets/assets/audio/nor/Ta-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ga.wav": "b0056a69bb40bd7a6b16dee97ba9e46b",
"assets/assets/audio/nor/Ka-Da.wav": "ffc953054cf1854b5dff033b49afe237",
"assets/assets/audio/nor/Da-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ga-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ga-Ka.wav": "38cb5cf33f3e4778cae25823b58695bc",
"assets/assets/audio/nor/Da-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ba-Da.wav": "53aaf66543194400e72410fe101c8f0c",
"assets/assets/audio/nor/Da-Ta.wav": "e2f1be83c514c60e787726d15d6b1877",
"assets/assets/audio/nor/Ta-Ba.wav": "5021efa528bedd003215e6debb141e1f",
"assets/assets/audio/nor/Ba-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ga-Ga.wav": "fc9467598d6a0f4100e45ed08133846a",
"assets/assets/audio/nor/Ka-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Pa-Ta.wav": "83511adf5c2b723b6eca1303419e288c",
"assets/assets/audio/nor/Ga-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ba-Pa.wav": "0d9e52490f202432c2b85d36d13bbb6f",
"assets/assets/audio/nor/Pa-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ta-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/nor/Ka-Pa.wav": "8cfd16e262480a065e7ff0b57c34d7dd",
"assets/assets/audio/ger/Da-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ba-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ba.wav": "a152f91d2253229dff7977ba7592c416",
"assets/assets/audio/ger/Ga-Pa.wav": "14f92591c95b3efc183011d6e24acc79",
"assets/assets/audio/ger/Ka-Ka.wav": "23ca606a71ce1d84739ffe6972ed9720",
"assets/assets/audio/ger/Pa-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ba-Ga.wav": "3a5a549f9bac9fcd3857ce875a95c465",
"assets/assets/audio/ger/Ta-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Da-Ba.wav": "a7c9e0fb254058327f86ed9da2674fa4",
"assets/assets/audio/ger/Ta-Ta.wav": "1e1347a226cb0d8d03fe76aa85e677c2",
"assets/assets/audio/ger/Ga-Da.wav": "3566a119e32f83e854424ffd1216f6c1",
"assets/assets/audio/ger/Ga-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Ga.wav": "8c6f8c7284dac239543931e74d51c138",
"assets/assets/audio/ger/Ba-Ka.wav": "fc1d9cd14e0baf888a5f5629526d3154",
"assets/assets/audio/ger/Ba-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ta-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Da-Pa.wav": "c21a7578ab564ded6b29b5337b95d387",
"assets/assets/audio/ger/Pa-Da.wav": "6263f3772e829518f4ae011178f34b50",
"assets/assets/audio/ger/Da-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ba-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ta-Ka.wav": "261fb00ce81baa119228cdfc717b2041",
"assets/assets/audio/ger/Da-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ga-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Ta.wav": "d1290c3f805c36df3366b30e7463d9b3",
"assets/assets/audio/ger/Ta-Ga.wav": "a8bb1d58a213b6cc89e0c35e1c8d1295",
"assets/assets/audio/ger/Ba-Ta.wav": "b8b2564eb161ee5fcfc8aa47df5f7ea0",
"assets/assets/audio/ger/Ta-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Da-Da.wav": "6d8fa39cd22b536c5f6af84db59dd0fb",
"assets/assets/audio/ger/Ka-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ga-Ba.wav": "cb9581523d79ad41a46a84ba86d69666",
"assets/assets/audio/ger/Ga-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Pa.wav": "627800f0816e05bc2d68c03cb47676b2",
"assets/assets/audio/ger/Ga-Ta.wav": "516fda109ae75975b688b968b14f53bd",
"assets/assets/audio/ger/Da-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ba-Ba.wav": "6187f02b0ecca08949034e1f1247c4c9",
"assets/assets/audio/ger/Ta-Da.wav": "1fcca4384a7c6a984f490b89bfe50568",
"assets/assets/audio/ger/Da-Ga.wav": "25f8075d3e5fdddfb00cea592c16c331",
"assets/assets/audio/ger/Ba-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Ba.wav": "6c023ef82ed3f0b651a48273c1420236",
"assets/assets/audio/ger/Ka-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Da-Ka.wav": "5d3e9b965e77ee0ba914b0e9c1e41c9d",
"assets/assets/audio/ger/Ba-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ta-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ga-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ka.wav": "89c3aff74ee1ccb01eb7f76b834b9d14",
"assets/assets/audio/ger/Ta-Pa.wav": "47ca3954aed2be4001917ef03d90e127",
"assets/assets/audio/ger/Ta-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ga.wav": "f9cb23526d306d0fa72c0cd4eb4ae2da",
"assets/assets/audio/ger/Ka-Da.wav": "20806edb748048c1a64548b193c53d3b",
"assets/assets/audio/ger/Da-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ga-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ga-Ka.wav": "c53c09da4c8f46a132eabc1f17d7510e",
"assets/assets/audio/ger/Da-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ba-Da.wav": "d46651ee8740d534aa52b4052b3fe95f",
"assets/assets/audio/ger/Da-Ta.wav": "da64257edebfc3facaf2d38bef979485",
"assets/assets/audio/ger/Ta-Ba.wav": "27b534942b197ce687adba6fa4ef4aec",
"assets/assets/audio/ger/Ba-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ga-Ga.wav": "3add44e5fcfd64b7aa5f0bb990d2cc16",
"assets/assets/audio/ger/Ka-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Pa-Ta.wav": "3948e2c42953745bfdd3bc44f2dc0624",
"assets/assets/audio/ger/Ga-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ba-Pa.wav": "aa290f9f9940d2f74d2a269c1ec98ea6",
"assets/assets/audio/ger/Pa-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ta-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/ger/Ka-Pa.wav": "b2dde3ca3ef02bd9023fda1e55b169ea",
"assets/assets/audio/fre/Da-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ba-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ba.wav": "4c240672bfdc690dd3c3dae0e59952c9",
"assets/assets/audio/fre/Ga-Pa.wav": "402257059b9e7b393903516c1e56af18",
"assets/assets/audio/fre/Ka-Ka.wav": "8b3202c4cea8a15ba31a3f501244ee5f",
"assets/assets/audio/fre/Pa-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ba-Ga.wav": "f758fa7f97ad8d442014bfb5538faba5",
"assets/assets/audio/fre/Ta-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Da-Ba.wav": "1af1f7680eaa895845ae815d9d694912",
"assets/assets/audio/fre/Ta-Ta.wav": "8fb6a7d19f23ff9d813b0e4c727090b3",
"assets/assets/audio/fre/Ga-Da.wav": "bfc1576453951c77703d4283d96d7a05",
"assets/assets/audio/fre/Ga-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Ga.wav": "35af281742d4faf62b4c8a05f3822a4f",
"assets/assets/audio/fre/Ba-Ka.wav": "8383e8a8a1a904ead8eecfde58bf8568",
"assets/assets/audio/fre/Ba-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ta-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Da-Pa.wav": "543d27b496596181e977d739f602bf20",
"assets/assets/audio/fre/Pa-Da.wav": "bdd8f01768e1fe8e92eb31c9e344efee",
"assets/assets/audio/fre/Da-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ba-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ta-Ka.wav": "cf19e8f76183a33209cae1f8a72db55f",
"assets/assets/audio/fre/Da-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ga-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Ta.wav": "e6f3898e94ef433fa946f203a90d5c0a",
"assets/assets/audio/fre/Ta-Ga.wav": "98f082e6fe67df383c1b91675246ce90",
"assets/assets/audio/fre/Ba-Ta.wav": "35b1e0c290359807efcfbf195e91eb20",
"assets/assets/audio/fre/Ta-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Da-Da.wav": "14b3d460c9a9914c14f0a4d54ff774fb",
"assets/assets/audio/fre/Ka-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ga-Ba.wav": "7b058702cd0bcc3f2021e728836569c7",
"assets/assets/audio/fre/Ga-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Pa.wav": "155b4b8bf7143bb1dbf3a17e43b65ea6",
"assets/assets/audio/fre/Ga-Ta.wav": "5deeeb911d35be190ed8fb9680eb14cd",
"assets/assets/audio/fre/Da-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ba-Ba.wav": "e8764fe6c2251a16a6d1ad1bf2277887",
"assets/assets/audio/fre/Ta-Da.wav": "5058d41cf04e922a2d3301102aeb7c0f",
"assets/assets/audio/fre/Da-Ga.wav": "0a6e5f2d5558e15ec40e4ee11e4bbb71",
"assets/assets/audio/fre/Ba-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Ba.wav": "45160b4b31550ed2de5fdc28bab6f0c5",
"assets/assets/audio/fre/Ka-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Da-Ka.wav": "1baffabed62d1ab29e488ab34144ecdb",
"assets/assets/audio/fre/Ba-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ta-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ga-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ka.wav": "b684cf751dfc4d77d16a838e3e45ca30",
"assets/assets/audio/fre/Ta-Pa.wav": "16ed388f03975c09de3a3d8f205934d5",
"assets/assets/audio/fre/Ta-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ga.wav": "8a7d4d949b88fdb1002fb14a3b2f0ab4",
"assets/assets/audio/fre/Ka-Da.wav": "253357ee84d8ec22e70aba9628f0d397",
"assets/assets/audio/fre/Da-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ga-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ga-Ka.wav": "e303636a549b66fde9e43ffac6c776f3",
"assets/assets/audio/fre/Da-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ba-Da.wav": "25cd7669e9dae7d44d3f5062804902b5",
"assets/assets/audio/fre/Da-Ta.wav": "171290bcb390b36e304d2bce403c5773",
"assets/assets/audio/fre/Ta-Ba.wav": "9317fb7994c1c2b32ed7bcd8760d7547",
"assets/assets/audio/fre/Ba-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ga-Ga.wav": "c592c551714d3449b10f2b7e97baf0e5",
"assets/assets/audio/fre/Ka-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Pa-Ta.wav": "32a13ad2d50d8f42b93a8296463953a8",
"assets/assets/audio/fre/Ga-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ba-Pa.wav": "97de74b77073255bb44171438a626e92",
"assets/assets/audio/fre/Pa-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ta-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/fre/Ka-Pa.wav": "169875d37c2b5e260270fa5866c09ac4",
"assets/assets/audio/est/Da-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ba-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ba.wav": "8373724bfb915ee9f7a18a5413388d5e",
"assets/assets/audio/est/Ga-Pa.wav": "868c4c3b8454f595435fc2b63153cd14",
"assets/assets/audio/est/Ka-Ka.wav": "44bded895b6eaefcd5394fc78f1d4697",
"assets/assets/audio/est/Pa-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ba-Ga.wav": "008ef1dc63680d9d18443d4bdc5228b6",
"assets/assets/audio/est/Ta-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Da-Ba.wav": "84eabc5d3e1ef10beda356e310eee3f2",
"assets/assets/audio/est/Ta-Ta.wav": "47aad70253411268e944438df24dbaaa",
"assets/assets/audio/est/Ga-Da.wav": "58e2532410974a8bbcabb84fa2f4c0e7",
"assets/assets/audio/est/Ga-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Ga.wav": "753b8858ce802946480e195ba61ee5ba",
"assets/assets/audio/est/Ba-Ka.wav": "791dde39f924f6d309d09b2186fd2785",
"assets/assets/audio/est/Ba-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ta-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Da-Pa.wav": "4c928219a5015fc4cb916828f3ffe856",
"assets/assets/audio/est/Pa-Da.wav": "932e7f784b3d65949dc189a9bf8b9c6f",
"assets/assets/audio/est/Da-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ba-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ta-Ka.wav": "0f0edc68645964dec3eb66854da4cdcf",
"assets/assets/audio/est/Da-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ga-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Ta.wav": "f6aa84ce19ee935b9c5db867a627433c",
"assets/assets/audio/est/Ta-Ga.wav": "3ab9c12dd30bebb14129147b94c4e93e",
"assets/assets/audio/est/Ba-Ta.wav": "3ff790f634085c97a9fb55623f6b1f4c",
"assets/assets/audio/est/Ta-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Da-Da.wav": "ed2d68de5d0b578733279a76fd1ac10d",
"assets/assets/audio/est/Ka-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ga-Ba.wav": "52a29407cbbc0115a764fe30b5b6a2eb",
"assets/assets/audio/est/Ga-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Pa.wav": "b8ced71e649adbb5c338b2c85364f939",
"assets/assets/audio/est/Ga-Ta.wav": "f0684b4a59df74f21b97ee7d33a95a66",
"assets/assets/audio/est/Da-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ba-Ba.wav": "b343cf6e2c08062c2e595654a91f9102",
"assets/assets/audio/est/Ta-Da.wav": "3d36b44015853dbee17e548ffa6190ac",
"assets/assets/audio/est/Da-Ga.wav": "3ea1d39c6678a5433c6d78ba0f04c796",
"assets/assets/audio/est/Ba-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Ba.wav": "a0f9d68a6120094eee74d0dc89a0fd6b",
"assets/assets/audio/est/Ka-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Da-Ka.wav": "f8e1cd0ba5090301c7c9404679d3abb2",
"assets/assets/audio/est/Ba-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ta-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ga-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ka.wav": "8965ba4538afb05b0b11a149b92f7d66",
"assets/assets/audio/est/Ta-Pa.wav": "ac2fbe314e67ff93f295f9862050af37",
"assets/assets/audio/est/Ta-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ga.wav": "42d5ddba725c14ea4261a70585250fbf",
"assets/assets/audio/est/Ka-Da.wav": "3f247230e371170a58069d61ffb01db4",
"assets/assets/audio/est/Da-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ga-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ga-Ka.wav": "1afb8fd051101934908b20a88144f4a5",
"assets/assets/audio/est/Da-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ba-Da.wav": "41e7e379813191042c5ab6821e9f1083",
"assets/assets/audio/est/Da-Ta.wav": "16641c62d4656d325f612807bb5a3e55",
"assets/assets/audio/est/Ta-Ba.wav": "baeb0f98393a2dd26ddcaf3708dcde13",
"assets/assets/audio/est/Ba-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ga-Ga.wav": "8ba789316c93fb89aaf463d74f967190",
"assets/assets/audio/est/Ka-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Pa-Ta.wav": "c3156d0fd2a6ff3d7f4909b357e51bac",
"assets/assets/audio/est/Ga-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ba-Pa.wav": "35ba3458dcf62e71495fb20e6916f2bd",
"assets/assets/audio/est/Pa-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ta-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/est/Ka-Pa.wav": "c4cb206eab9aef7166f4d0e86820b661",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

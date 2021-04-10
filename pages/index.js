import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const EditorJs = dynamic(
  () => import('react-editor-js'),
  { ssr: false }
)

const data = {
  "blocks": [
    {
      "type": "paragraph",
      "data": {
        "text": "Halit Ayarcı’yı tanımadan evvelki hayatım, dedim. Fakat gerçekten buna bir hayat denebilir mi? Eğer yaşamak kelimesinin mânası her şeyden mahrum olmak ve ıstırap çekmekse, her an küçülmek ve bunu nefsinde her lâhza duymaksa, bir türlü aşamayacağı bir çemberin içinde durmadan çırpınmaksa, süphesiz ben de, benimkiler de en derin şekilde yaşıyorduk. Yok, bu kelimenin içinde biraz ruh ve imkân genişliği, birtakım hakları duymak, o içten sevinmeler, dışa karşı bir parçacık güven, etrafınızla müsavi şartlar içinde rahat bir karşılaşma filân varsa, o zaman iş çok değişir. Dikkat ediniz ki, bir şeyler yapmaktan, insanlara faydalı olmaktan hiç bahsetmedim. Zaten Halit Ayarcı’yı tanıyana kadar bu cinsten bir zevkin farkında bile değildim. Bugün ise hayatımın bir gayesi var. Arkamda az çok beni hatırlatacağına inandığım bir iş bırakıyorum. On yıl müddetle dünyanın en yeni, en faydalı müessesesinin müdür muavinliğini yaptım. Değil çoluk çocuğuma, uzak yakın bütün akrabama, eş ve dostuma, hattâ insan hâli, vaktiyle kalbimi kıranlara bile iyilik ettim, iş buldum, refaha kavuşturdum. Bu meselede sade enstitümüz memurları için -ki yarısı benim ve Halit Ayarcı’nın akrabasıdır, çünkü enstitü kurulur kurulmaz kadrosunun müsavi şekilde mühim yerlerden tavsiye edilenlerle hısım ve akrabamızdan teşkil edilmesine Halit Ayarcı büyük bir isabetle karar vermiş ve bu kararı hiç şaşmadan takip etmiştik-, Suadiye tarafında yaptırdığımız mahalle ile şehrimizin imarına yaptığımız hizmeti hatırlamak kâfidir sanırım."
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "Bilmem enstitümüzün daha ilga kararından çok evvel matbuatta aleyhinde başlayan ve ilga kararından sonra büsbütün şiddetini arttıran hücumlardan burada bahsetmeğe lüzum var mı? Hayat ne kadar gariptir? On sene evvel her yaptığımızı beğenen, öven, geniş teşkilâtımızı dünyaya bir örnek gibi gösteren gazeteler, vaktiyle o kadar dostum olan, gerek resmî kokteyllerimize, gerek basın toplantılarımıza can atan gazeteler şimdi aleyhimize yazmadıklarını bırakmıyorlar."
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "Evvelâ teşkilâtın genişliğinden ve lüzumsuzluğundan bahsettiler. İşsizliğin alabildiğine yürüdüğü bir memlekette bu kadar insana iş bulmuş olmamızı hiç hesaba katmadan, üç müdürlüğün, on bir şube müdürlüğünün, kırk yedi daktilo ve iki yüz yetmiş bir kontrol memurunun çokluğunu durmadan başımıza kaktılar. Sonra, sanki bir saatte yelkovan, akrep, zemberek, pandül, mil hakikaten yokmuş ve hakikaten zaman dediğimiz şey, saat, dakika, saniye ve sâliseye ayrılmazmış gibi bu şube müdürlüklerinin adlarıyla alay ettiler. Daha sonra bu müdürlüklerde on sene ehliyetle çalışan, işlerinin içinde pişip yetişmiş memurlarımızın tahsillerini, ihtisas ve se-lâhiyetlerini ele aldılar, nihayet bir zamanlar o kadar beğendikleri neşriyatımıza insafsızca hücum ettiler."
      }
    },
  ]
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edit me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EditorJs data={data} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/nathanwpyle/status/1156299925795364864/photo/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by the Nearest Star
        </a>
      </footer>
    </div>
  )
}

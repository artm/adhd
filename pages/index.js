import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EditMeStyles from '../styles/EditMe.module.css'
import dynamic from 'next/dynamic'
import React from "react"

const SyncEditor = dynamic(() => import("../src/sync_editor"), { ssr: false })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edit me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={EditMeStyles.wrapper}>
        <SyncEditor data={data} />
      </div>

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

const data = [
  {
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
  },
  {
    "blocks": [
      {
        "type": "paragraph",
        "data": {
          "text": "I mentioned my life prior to meeting Halit Ayarcı. But can one really call it a life? If to live is to endure endless pain and destitution and to suffer humiliation so deep that it afflicts each and every fiber of one’s being, if it means fluttering ceaselessly against the walls of a cage that will never open, then there is no doubt that I and others like me did “live,” in the fullest sense of the word. But if the word encompasses a wealth of spirit and possibility, a modicum of rights, a few rare moments of inner bliss, with a dash of trust in the outside world, and a sense of fairness and balance in dealing with one’s fellow man and suchlike—well, then things are quite different. You might have noticed that I make no mention whatsoever of helping others or doing anything constructive. Until I met Halit Ayarcı, I was never even aware of such pleasures. Today, however, my life has meaning. I shall leave behind a work that I believe will more or less secure me a place in the annals of history. For ten years, I acted as assistant head manager of one of the most innovative and beneficial organizations in the world. I helped not only my own immediate family but also my close and distant relatives and my friends, even those who had once betrayed me, by providing them with employment and a sense and source of well-being. In this regard I suppose it would suffice to highlight our contribution to urban development through the construction of a new district near Suadiye, as well as the services our institute provided to its workers, most of whom were in fact relatives of either myself or Halit Ayarcı. For as soon as the institute was established, Halit made the very important decision—from which we never strayed—that half the management positions and other important posts would be filled by members of our families and the other half by those who had the recommendation of a notable personage."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "I am not sure if I need to mention the criticisms much aired in the papers long before it was decided to liquidate the institute or the ever more violent attacks that followed the institute’s dissolution. Life can be so strange. Ten years ago the very same papers delighted in everything we did, showering us with praise and holding us aloft as a model to the world. Though they attended our every press conference and never missed an official cocktail party, these dear friends of mine now do nothing but hurl abuse."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "First they condemned the organization for its unwieldy size and inefficiency. Overlooking the fact that we created jobs for so many in a country where unemployment is rampant, they railed against our excesses: three management offices, eleven management branches, forty-seven typists, and two hundred seventy control bureaus. Then they ridiculed the names of our various branches, overlooking the fact that a watch or clock is indeed made up of hands for minutes and hours, a years’ experience with us—before mercilessly denouncing my early book, The Life and Works of Ahmet the Timely, which had once delighted them."
        }
      },
    ]
  },
]


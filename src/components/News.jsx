import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Disney: Bob Iger in shock return to media giant - BBC",
      description:
        'Bob Iger, who led the firm for 15 years, said in January it was "ridiculous" to suggest he may return.',
      url: "https://www.bbc.com/news/business-63698756",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/10952/production/_127722976_gettyimages-1046772050.jpg",
      publishedAt: "2022-11-21T10:23:45Z",
      content:
        "Ex-Disney boss Bob Iger is making a shock return to the firm - less than a year after he retired.\r\nHe has been brought back by the media giant to steer it through turbulent times as the share price h… [+3915 chars]",
    },

    {
      source: { id: "cnn", name: "CNN" },
      author:
        "Emma Tucker, Eric Levenson, Michelle Watson, Andy Rose, Amir Vera",
      title:
        "What we know about the Colorado Springs LGBTQ nightclub shooting - CNN",
      description:
        "A 22-year-old gunman killed at least five people and injured 25 others in an LGBTQ nightclub in Colorado Springs, Colorado, just before midnight Saturday, police said Sunday.",
      url: "https://www.cnn.com/2022/11/20/us/colorado-springs-nightclub-shooting-what-we-know/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221120133949-04-colorado-springs-shooting-1120.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-11-21T08:59:00Z",
      content:
        "A 22-year-old gunman killed at least five people and injured 25 others in an LGBTQ nightclub in Colorado Springs, Colorado, just before midnight Saturday, police said Sunday. \r\nThe suspect in the sho… [+7647 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Arjun Kharpal",
      title:
        "Bitcoin drops to 1-week low, ether slides 7% as FTX collapse ripples through crypto market - CNBC",
      description:
        "The cryptocurrency market has come under pressure over the last two weeks as problems at major exchange FTX came to light.",
      url: "https://www.cnbc.com/2022/11/21/bitcoin-btc-ether-eth-fall-as-ftx-collapse-ripples-through-market.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107154692-1669019941242-gettyimages-1244771986-porzycki-ftxphoto221114_nps5I.jpeg?v=1669021028&w=1920&h=1080",
      publishedAt: "2022-11-21T08:57:08Z",
      content:
        "The hacker has begun dumping some of their ether holding into other assets, according to public blockchain records of the account suspected to be linked to the person. This could be one reason ether … [+2702 chars]",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Joe Prince-Wright",
      title:
        "Ecuador cruises past hosts Qatar to win World Cup opener - NBC Sports",
      description:
        "Ecuador eased past hosts Qatar to win the opening game of the 2022 World Cup and put themselves in a very promising position in Group A.",
      url: "https://soccer.nbcsports.com/2022/11/21/qatar-vs-ecuador-video-highlights-reaction-analysis/",
      urlToImage:
        "https://soccer.nbcsports.com/wp-content/uploads/sites/14/2022/11/GettyImages-1443040013-e1668966642457.jpg",
      publishedAt: "2022-11-21T08:15:00Z",
      content:
        "The World Cup 2022 schedule is locked in and there is so much to look forward to ahead of the tournament in Qatar in November and December, as it is officially underway!\r\n[ LIVE: Watch World Cup en E… [+6576 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Guardian staff reporter",
      title:
        "China reports first Covid deaths in six months as Beijing cases rise - The Guardian",
      description:
        "Three people died in the capital over the weekend and officials have called for residents to avoid ‘non-imperative’ travel",
      url: "https://www.theguardian.com/world/2022/nov/21/china-reports-first-covid-death-for-six-months-as-beijing-cases-rise",
      urlToImage:
        "https://i.guim.co.uk/img/media/a4c8bf4b9b4cdb211f2dd3414e240de2cdea6eb8/0_230_6009_3606/master/6009.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4662d7174254420b4420900953900d8f",
      publishedAt: "2022-11-21T05:55:00Z",
      content:
        "China reported the deaths of three people in Beijing over the weekend as its first fatalities from Covid-19 in six months, with cases rising despite a stringent zero-Covid policy.\r\nChina is the last … [+2758 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Kathleen Magramo",
      title:
        "Kamala Harris' visit to the Philippines sends China a message of US intent - CNN",
      description:
        "A Philippine archipelago known for tropical vacations will become the focus of political attention this week when Vice President Kamala Harris becomes the highest ranking US official to visit its main island.",
      url: "https://www.cnn.com/2022/11/21/asia/philippines-south-china-sea-kamala-harris-visit-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221121073317-01-kamala-harris-manila.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-11-21T05:50:00Z",
      content:
        "A Philippine archipelago known for tropical vacations will become the focus of political attention this week when Vice President Kamala Harris becomes the highest ranking US official to visit its mai… [+6596 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Kansas City Chiefs vs. Los Angeles Chargers | 2022 Week 11 Game Highlights - NFL",
      description:
        "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
      url: "https://www.youtube.com/watch?v=4H33_Cj2Gc8",
      urlToImage: "https://i.ytimg.com/vi/4H33_Cj2Gc8/maxresdefault.jpg",
      publishedAt: "2022-11-21T05:43:41Z",
      content: null,
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Su-Lin Tan",
      title:
        "Malaysian voters erred on the side of conservatism at weekend polls, analysts said - CNBC",
      description:
        "Malaysia is facing a hung parlia ment with no clear coalition winner emerging to form a majority government.",
      url: "https://www.cnbc.com/2022/11/21/malaysian-voters-erred-on-the-side-of-conservatism-at-weekend-polls-analysts-said.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107154638-1669003459655-gettyimages-1244920993-hazim-notitle221120_npg3s.jpeg?v=1669009073&w=1920&h=1080",
      publishedAt: "2022-11-21T05:37:53Z",
      content:
        "It will be a tough road to victory for Malaysia's reformist party Pakatan Harapan after the weekend's general elections where voters leaned toward conservative and religious parties, analysts said. \r… [+3824 chars]",
    },
    {
      source: { id: "axios", name: "Axios" },
      author: "Rebecca Falconer",
      title:
        "Supreme Court leak claim: Senate Judiciary panel to review 2014 breach claim - Axios",
      description:
        "Justice Alito and a donor at the center of the allegations both deny any involvement in the claims.",
      url: "https://www.axios.com/2022/11/21/senate-judiciary-panel-review-2014-supreme-court-leak-claim",
      urlToImage:
        "https://images.axios.com/epUwDcePli7a5Aj6Uw25udqeMJY=/0x229:7865x4653/1366x768/2022/11/21/1668990274975.jpg",
      publishedAt: "2022-11-21T05:26:15Z",
      content:
        'Senate Judiciary Committee Chair Dick Durbin (D-Ill.) announced his panel is reviewing "serious allegations" in a New York Times report Saturday that a 2014 Supreme Court ruling was leaked to a forme… [+2003 chars]',
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Hilary Lewis",
      title:
        "Taylor Swift Sweeps 2022 American Music Awards, Extending Record as Most-Awarded Artist in AMAs History - Hollywood Reporter",
      description:
        "Taylor Swift swept the 2022 American Music Awards Sunday night, winning all six awards for which she was nominated including the top prize of artist of the year. Three of her awards came for her work on her re-recorded Red (Taylor’s Version), including the 10…",
      url: "https://www.hollywoodreporter.com/news/music-news/2022-american-music-awards-winners-full-list-1235266717/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/11/GettyImages-1443142868-copy.jpg?w=1024",
      publishedAt: "2022-11-21T05:11:13Z",
      content:
        "Taylor Swift swept the 2022 American Music Awards Sunday night, winning all six awards for which she was nominated including the top prize of artist of the year. \r\nThree of her awards came for her wo… [+12576 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "CBSBoston.com Staff",
      title:
        "Brandeis University student Vanessa Mark killed, 27 hurt in shuttle bus crash in Waltham - CBS Boston",
      description:
        "Brandeis University student Vanessa Mark was killed and more than two dozen others were hurt when a university shuttle bus crashed in Waltham late Saturday night.",
      url: "https://www.cbsnews.com/boston/news/vanessa-mark-brandeis-university-bus-crash-student-killed-waltham-massachusetts-south-street/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2022/11/20/81d838f4-ebb2-4766-80de-0a8438fd3b95/thumbnail/1200x630/7222c9cd5c4d59daa3fd3d42f0575d9c/waltham1.jpg",
      publishedAt: "2022-11-21T05:08:00Z",
      content:
        "WALTHAM - Brandeis University student Vanessa Mark was killed and more than two dozen others were hurt when a university shuttle bus crashed in Waltham late Saturday night.\r\nIn a joint statement Sund… [+4057 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "NFL Week 11 grades: Giants get a 'D' for ugly loss to Lions, Cowboys earn an 'A+' for destroying Vikings - CBS Sports",
      description:
        "Here are the Week 11 grades for every team that played Sunday",
      url: "https://www.cbssports.com/nfl/news/nfl-week-11-grades-giants-get-a-d-for-ugly-loss-to-lions-cowboys-earn-an-a-for-destroying-vikings/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/11/20/21c419b7-133a-42d4-82c2-842a06f55df9/thumbnail/1200x675/a76b6ff21301b3fe9944c171a2369ad4/daniel-jones-lions-g.jpg",
      publishedAt: "2022-11-21T04:37:00Z",
      content:
        "Through the first 10 weeks of the year, the New York Giants were having a dream season, but they got hit with a harsh reality check during Sunday's surprising loss to the Detroit Lions. \r\nThe big pro… [+3647 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Dominic Patten",
      title:
        "‘The Walking Dead’ Series Finale: EPs Angela Kang & Scott M. Gimple Talk Return Of [Spoiler], “Intense” Conclusion & Those Spinoffs - Deadline",
      description:
        "SPOILER ALERT: This article contains details of tonight’s The Walking Dead series finale and more. “I wanna talk about the future,” says Maggie Rhee (Lauren Cohan) to Daryl Dixon (Norman Reedus) and Carol Peletier (Melissa McBride) right near the end of The W…",
      url: "https://deadline.com/2022/11/walking-dead-spoilers-series-finale-andrew-lincoln-danai-gurira-norman-reedus-angela-kang-scott-gimple-spinoffs-interview-1235177990/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/11/TWD-FINALE-NORMAN-REEDUS-AMC-1.jpeg?w=1024",
      publishedAt: "2022-11-21T03:30:00Z",
      content:
        "SPOILER ALERT: This article contains details of tonight’s The Walking Dead series finale and more. \r\n“I wanna talk about the future,” says Maggie Rhee (Lauren Cohan) to Daryl Dixon (Norman Reedus) an… [+18055 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Taiyler Simone Mitchell",
      title:
        "Adam Schiff slams Kevin McCarthy after he promises to remove 3 prominent Dems from their committees: 'He will do whatever Marjorie Taylor Greene wants him to do' - Yahoo News",
      description:
        "House Minority Leader Kevin McCarthy is running for House Speaker. He's promised to reinstate MTG to committees and remove some Dems from theirs.",
      url: "https://www.businessinsider.com/rep-adam-schiff-kevin-mccarthy-marjorie-taylor-greene-2022-11",
      urlToImage:
        "https://i.insider.com/637ad1e72c8b9a0018cbd4e8?width=1200&format=jpeg",
      publishedAt: "2022-11-21T02:41:29Z",
      content:
        "Rep. Adam Schiff criticized House Minority Leader Kevin McCarthy for vowing to remove three Democrats from their committee assignments if elected speaker.\r\nMcCarthy has his sights set on removing Rep… [+1853 chars]",
    },
    {
      source: { id: null, name: "WABC-TV" },
      author: null,
      title:
        "Buffalo snowstorm 2022: Lake-effect snow buries northern New York - WABC-TV",
      description:
        "Parts of New York are finally catching a break after a storm dumped snow for days on cities and towns east of Lake Erie and Lake Ontario.",
      url: "https://abc7ny.com/buffalo-snowstorm-weather-77-inches/12474740/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/12474801_112022-wabc-buffalo2-img.jpg?w=1600",
      publishedAt: "2022-11-21T02:30:02Z",
      content:
        "BUFFALO, New York -- Parts of New York finally caught a break Sunday after a storm spent days dumping a potentially record-setting amount of snow on cities and towns east of Lake Erie and Lake Ontari… [+2272 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Sonya Hamasaki, Zoe Sottile",
      title: "Jason David Frank, Power Rangers actor, dies at 49 - CNN",
      description:
        'Actor Jason David Frank, best known for starring in the original "Mighty Morphin Power Rangers" TV franchise, has died, according to multiple reports citing his representative.',
      url: "https://www.cnn.com/2022/11/20/entertainment/jason-david-frank-power-ranger-death-trnd/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221120173526-jason-david-frank-power-ranger-death-trnd.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-11-21T01:55:00Z",
      content:
        "Actor Jason David Frank, best known for starring in the original Mighty Morphin Power Rangers TV franchise, has died, according to multiple reports citing his representative. \r\nThe actor died in Texa… [+700 chars]",
    },
    {
      source: { id: null, name: "GamesIndustry.biz" },
      author: "Christopher Dring",
      title:
        "Pokémon Scarlet and Violet is the second biggest Pokémon launch of all time | UK Boxed Charts - GamesIndustry.biz",
      description:
        "Pokémon Scarlet and Violet is the second biggest UK Pokémon launch ever",
      url: "https://www.gamesindustry.biz/pokemon-scarlet-and-violet-is-the-second-biggest-pokemon-launch-of-all-time-uk-boxed-charts",
      urlToImage:
        "https://assets.reedpopcdn.com/Pokemon-Scarlet-and-Violet-Header_f1zO36s.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/Pokemon-Scarlet-and-Violet-Header_f1zO36s.jpg",
      publishedAt: "2022-11-21T01:21:05Z",
      content:
        "Pokémon Scarlet and Violet is the latest video game to post huge launch sales in the UK.\r\nIt is the biggest boxed game launch of the year, with opening week sales up 4% compared with FIFA 23 (the pre… [+2948 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        '"Unprecedented": IAEA head on the current threat of nuclear catastrophe in Ukraine - 60 Minutes - CBS News',
      description:
        "Rafael Mariano Grossi, head of the U.N.'s nuclear watchdog, tells Lesley Stahl about the situation at Zaporizhzhia Nuclear Power Plant, which has been shelled repeatedly since March.",
      url: "https://www.cbsnews.com/news/iaea-rafael-mariano-grossi-zaporizhzhia-nuclear-power-plant-60-minutes-2022-11-20/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/11/20/fede618a-c820-4137-bd88-b1a6bec28894/thumbnail/1200x630/291ba372bd7591b1964ffa25abb2dec5/nuclearbreakout20.jpg",
      publishedAt: "2022-11-21T00:42:24Z",
      content:
        "Europe's biggest nuclear power plant, Zaporizhzhia, is maybe the most dangerous place in the world right now. The plant is in Russian-occupied Ukraine and has been shelled repeatedly since March.\r\nTh… [+5270 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Maura Judkis, Tyler Pager, Jada Yuan",
      title:
        "More details from Naomi Biden's White House wedding - The Washington Post",
      description:
        "Privacy and security prevailed on Saturday for Naomi Biden and Peter Neal's big day at the White House. Here’s what we found out anyway.",
      url: "https://www.washingtonpost.com/lifestyle/2022/11/20/naomi-biden-peter-neal-white-house-wedding-details/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HXIS37TI6QI63DIHZMLSGYAWCE.jpg&w=1440",
      publishedAt: "2022-11-21T00:22:29Z",
      content:
        "Comment on this story\r\nHow do you tell the story of a wedding you werent invited to attend one hosted in what may be the most public-yet-exclusive place in America to say I do?\r\nYou get creative. You… [+8729 chars]",
    },
  ];

  constructor() {
    console.log("bye");
    super();
    this.state = {
      articles: this.articles,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8e4859e2556d405a9eda8c20243dd08e";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div style={{ marginTop: "5%" }} className="container my-6 ">
        <h1 className="my-3">A2Z Top Headlines</h1>
        <div className="row">
          {" "}
          <hr />
          {this.state.articles.map((element) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-1 my-3">
                <NewsItem
                  title={element.title.slice(0, 45)}
                  key={element.url}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

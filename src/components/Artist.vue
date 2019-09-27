<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile">
        <div class="artistNameContainer">
          <div class="artistName">
            Daft Punk
          </div>
        </div>
      </div>
      <div class="tile">
        <div class="tile is-parent">
          <div class="tile is-child">
            <aside class="artistPortrait">
              <img
                src="
              https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
              />
              <a
                href="https://geo.music.apple.com/us/artist/daft-punk/5468295?mt=1&app=music&ls=1"
                style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?kind=artist&bubble=apple_music&style=standard-black) no-repeat;width:140px;height:30px;"
              ></a>
            </aside>
          </div>
          <div class="tile is-child">
            <aside class="artistInfos">
              un truc pour remplir
            </aside>
          </div>
        </div>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child">
          <p class="title">Biography</p>
          <div class="content">
            Daft Punk is a French electronic music duo formed in Paris in 1993
            by Guy-Manuel de Homem-Christo and Thomas Bangalter (born January 3,
            1975) They achieved popularity in the late 1990s as part of the
            French house movement; they also had success in the years following,
            combining elements of house music with funk, techno, disco, rock and
            synthpop. They have worn ornate helmets and gloves to assume robot
            personas in most public appearances since 1999 and rarely grant
            interviews or appear on television. The duo were managed from 1996
            to 2008 by Pedro Winter (also known as Busy P), the head of Ed
            Banger Records. After Bangalter and Homem-Christo's indie rock band
            Darlin' disbanded, they began experimenting with drum machines and
            synthesisers. Their debut studio album Homework was released by
            Virgin Records in 1997 to positive reviews, backed by singles
            "Around the World" and "Da Funk". Their second album, Discovery, had
            further success, supported by hit singles "One More Time", "Digital
            Love" and "Harder, Better, Faster, Stronger". In March 2005, Daft
            Punk released their third album, Human After All, to mixed reviews,
            though the singles "Robot Rock" and "Technologic" achieved success
            in the United Kingdom. Daft Punk toured throughout 2006 and 2007 and
            released the live album Alive 2007, which won a Grammy Award for
            Best Electronic/Dance Album. They composed the score for the film
            Tron: Legacy, which was released in 2010 alongside its soundtrack
            album. In 2013, Daft Punk left Virgin for Columbia Records, and
            released their fourth album, Random Access Memories, to acclaim;
            lead single "Get Lucky" reached the top 10 in the charts of 32
            countries. Random Access Memories won five Grammy Awards in 2014,
            including Album of the Year and Record of the Year for "Get Lucky".
            In 2016, Daft Punk gained their first number one on the Billboard
            Hot 100 with the song "Starboy", a collaboration with The Weeknd. As
            of 2015, Daft Punk had sold over 12 million albums worldwide. La bio
          </div>
        </article>
        <aside class="tile is-child">
          <p class="title">Albums</p>
          <aside class="artistAlbumsContainer" id="artistAlbumsContainerId">
            <section>
              <b-table
                :data="isEmpty ? [] : data"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :hoverable="isHoverable"
                :loading="isLoading"
                :focusable="isFocusable"
                :mobile-cards="hasMobileCards"
              >
                <template slot-scope="props">
                  <b-table-column field="title" label="Title">
                    {{ props.row.title }}
                  </b-table-column>

                  <b-table-column field="date" label="Date" centered>
                    <span class="tag is-success">
                      {{ props.row.year }}
                    </span>
                  </b-table-column>
                </template>

                <template slot="empty">
                  <section class="section">
                    <div class="content has-text-grey has-text-centered">
                      <p>
                        <b-icon icon="emoticon-sad" size="is-large"> </b-icon>
                      </p>
                      <p>Nothing here.</p>
                    </div>
                  </section>
                </template>
              </b-table>
            </section>
          </aside>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [
      {
        title: "Homework",
        year: "1997"
      },
      {
        title: "Discovery",
        year: "2001"
      },
      {
        title: "Human After All",
        year: "2005"
      },
      {
        title: "Random Access Memories",
        year: "2013"
      }
    ];

    return {
      data,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: true,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    };
  }
};
</script>

<style scoped>
.artistNameContainer {
  margin: 10px;
  text-align: center;
  width: 100%;
}

.artistName {
  font-size: 4rem;
}
</style>

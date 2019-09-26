<template>
  <div class="artistPage">
    <section class="artistInfos">
      <h1>BABYMETAL</h1>
      <a
        href="https://geo.music.apple.com/ca/artist/babymetal/477101776?mt=1&app=music&ls=1"
        style="display:inline-block;overflow:hidden;background:url(https://tools.applemusic.com/en-us/lockup.svg?kind=artist&bubble=apple_music&style=standard-black) no-repeat;width:140px;height:30px;"
      ></a>
      <h3>Genre: Metal</h3>
      <h2>Albums</h2>
    </section>
    <ul class="albumList">
      <li class="album">
        <figure>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music69/v4/72/e1/67/72e1674e-91a4-b1fb-dfee-7274a618bc6c/source/100x100bb.jpg"
            alt=""
          />
          <figcaption>
            <a href="https://music.apple.com/us/album/babymetal/984334432?uo=4"
              >Babymetal
            </a>
          </figcaption>
        </figure>
      </li>
      <li class="album">
        <figure>
          <img
            src="https://is5-ssl.mzstatic.com/image/thumb/Music5/v4/cf/b1/1d/cfb11dea-618f-ec99-831e-e3518fbd1c6c/source/100x100bb.jpg"
            alt=""
          />
          <figcaption>
            <a
              href="https://music.apple.com/us/album/metal-resistance/1086229979?uo=4"
              >Metal Resistance
            </a>
          </figcaption>
        </figure>
      </li>
      <li class="album">
        <figure>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/44/74/df/4474df97-5a4d-8b15-3286-111f708a497d/source/100x100bb.jpg"
            alt=""
          />
          <figcaption>
            <a
              href="https://music.apple.com/us/album/metal-galaxy/1475662687?uo=4"
              >METAL GALAXY
            </a>
          </figcaption>
        </figure>
      </li>
      <li class="album">
        <figure>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/7a/a0/a5/7aa0a50a-571c-d320-6f4f-0b01c312add9/source/100x100bb.jpg"
            alt=""
          />
          <figcaption>
            <a
              href="https://music.apple.com/us/album/starlight-single/1437899646?uo=4"
              >Starlight - Single
            </a>
          </figcaption>
        </figure>
      </li>
      <li class="album">
        <figure>
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/a2/f3/f0/a2f3f0fa-e1d8-9289-80f6-87920aa98a57/source/100x100bb.jpg"
            alt=""
          />
          <figcaption>
            <a
              href="https://music.apple.com/us/album/distortion-single/1376826384?uo=4"
              >Distortion - Single
            </a>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<style>
body {
  /* background: rgb(127, 127, 127); */
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}

.artistPage {
  color: whitesmoke;
}

.artistInfos {
  float: left;
}

.albumList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .artistInfos {
    float: center;
    /* display: inline-block; */
    /* flex-direction: column; */
  }

  .albumList {
    display: inline-block;
    /* flex-direction: column; */
  }
}

.album {
  max-width: 200px;
  margin: auto;
  margin-bottom: 20px;
}

.album > figure {
  margin: 10px;
  max-width: 200px;
  overflow: hidden;
  text-align: center;
}

.album > figure > img {
  border: 1px solid black;
  border-radius: 3%;
  box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.3);
  max-width: 330px;
  margin: 0;
  padding: 0;
}

.album > figure > figcaption {
  text-shadow: 1px 1px 3px gray;
}

.album > figure > figcaption > a {
  color: gold;
}

.album > figure > figcaption > a:hover {
  color: red;
}
</style>

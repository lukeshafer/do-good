<div class="divider" />

<div class="wrapper">
  <div class="background" />
  <h2>PrideFull</h2>
  <a href="/fundraisers/pridefull">
    <div class="basket">
      <svg width="100%" viewBox="0 0 300 300">
        <path
          id="curve"
          d="
          M65,210 C130,190 180,190 235,210"
          fill="transparent" />
        <text width="500">
          <textPath
            href="#curve"
            style="
              font-size:35px; 
              font-family:'Droid Serif'; 
              font-weight:bold;
              text-shadow: 0 0 0.3em white;
              "
            fill="var(--tertiary-color)">
            More Info
          </textPath>
        </text>
      </svg>
    </div>
  </a>
</div>

<div class="divider" />

<style>
  .divider {
    height: 3.5em;
    width: 100vw;
    background: url('https://res.cloudinary.com/do-good-collective/image/upload/c_scale,e_trim:10,w_960/v1656003088/pridefull/rainbow_flowers_z8bz9p.png');
    background-size: contain;
    opacity: 0.68;
  }

  .wrapper {
    position: relative;
  }

  .background {
    position: absolute;
    left: -10em;
    z-index: -1;
    background-image: url('https://res.cloudinary.com/do-good-collective/image/upload/c_scale,w_888/v1656003087/pridefull/rainbow_flag_zannet.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
    width: 100%;
    height: 40em;
  }

  .basket {
    background-image: url('https://res.cloudinary.com/do-good-collective/image/upload/c_scale,w_366/v1656003093/pridefull/basket_qh1xr5.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 14em;
    height: 14em;
    display: flex;
    margin: 1.5em auto;
    justify-content: center;
    align-items: center;
    transition: transform 100ms ease-in-out;
    opacity: 0.77;
  }

  .basket:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transform: scale(1.05);
  }
</style>

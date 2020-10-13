<template>
  <footer class="footer">
    <section class="footer__links">
      <p>
        <nuxt-link to="/">{{ $t('footer.credits') }}</nuxt-link>
      </p>
      <p>MarcFairbrother<span class="copyleft">©</span>2020</p>
    </section>
    <section class="footer__animation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 21" fill="none">
        <path
          d="M0 0v21h360V0c-9.0939 0-13.4061 6-22.5 6S324.0939 0 315 0c-9.0938 0-13.4062 6-22.5 6S279.094 0 270 0c-9.09399 0-13.406 6-22.5 6S234.094 0 225 0s-14.5 6-22.5 6c-9 0-13.406-6-22.5-6s-13.406 6-22.5 6-13.406-6-22.5-6-13.406 6-22.5 6S99.094 0 90 0 76.594 6 67.5 6 54.09399 0 45 0c-9.094 0-13.40601 6-22.5 6C13.406 6 9.09399 0 0 0zM-6.2087425 197.7928v21H556.29126v-15s-13.406-6-22.5-6-13.406 6-22.5 6-13.406-6-22.5-6-13.4062 6-22.5 6-13.4062-6-22.5-6-13.4062 6-22.5 6c-9.0939 0-13.4061-6-22.5-6s-13.40614 6-22.5 6-13.4061-6-22.5-6-13.4061 6-22.5 6-13.4061-6-22.5-6c-9.0938 0-13.4062 6-22.5 6s-13.406-6-22.5-6c-9.09399 0-13.406 6-22.5 6s-13.406-6-22.5-6-14.5 6-22.5 6c-9 0-13.406-6-22.5-6s-13.406 6-22.5 6-13.406-6-22.5-6-13.406 6-22.5 6c-9.094002 0-13.406002-6-22.500002-6-9.094 0-13.406 6-22.5 6s-13.40601-6-22.5-6c-9.094 0-13.40601 6-22.5 6-9.0940005 0-13.4060105-6-22.5000005-6z"
        />
      </svg>
      <div class="boat__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.458333 21.166667"
          id="boat"
        >
          <path
            d="M26.105272 15.6988l-12.897316 1.12869L.31064106 17.95566c-.17327795.0151-.38407868.19709-.28540989.34032L2.002381 21.16665h22.039755c.07975-.0632.116458-.17912.168345-.29266l2.234589-4.88978c.07229-.15819-.16652-.30056-.339798-.28541zM10.091334.50251v15.5733l2.619863-.22925 9.09208-.79577C20.602564 7.31888 15.905273 1.44529 10.091334.50251zm-.9700748 7.32577c-3.6008179.89806-6.1710299 4.55487-6.1756989 8.78657.0004146.0286.00301.0571.00379.0857l6.1719096-.53998z"
          />
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 21" fill="none">
        <path
          d="M22.5 0C13.406 0 9.09399 6 0 6v15h360V6c-9.09386 0-13.4061-6-22.5-6S324.0939 6 315 6s-13.4061-6-22.5-6c-9.0938 0-13.4062 6-22.5 6s-13.406-6-22.5-6c-9.09399 0-13.406 6-22.5 6s-13.406-6-22.5-6S188 6 180 6c-9 0-13.406-6-22.5-6S144.094 6 135 6s-13.406-6-22.5-6S99.094 6 90 6c-9.094002 0-13.406-6-22.5-6S54.094 6 45 6 31.59399 0 22.5 0z"
        />
      </svg>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      moveRight: true
    };
  },
  mounted() {
    const boat = document.querySelector('.boat__container');
    boat.addEventListener('animationiteration', e => {
      if (e.target === e.currentTarget) {
        console.log(this.moveRight);
        this.moveRight = !this.moveRight;
        const rotateY = this.moveRight ? 0 : 180;
        boat.setAttribute('style', `--rotateY: ${rotateY}deg`);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @include maxBreakpoint(1023px) {
    margin-bottom: 75px;
    @include breakpoint($tablet-width) {
      margin-bottom: 100px;
    }
  }
  &__links {
    margin: 0 15px 45px;
    @include breakpoint($tablet-width) {
      margin: 0 30px 45px;
      @include breakpoint($desktop-width) {
        background: var(--altBg);
        color: var(--altTextColor);
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 30px 0 45px;
        order: 2;
        @include breakpoint($large-width) {
          padding: 0 0 30px;
        }
      }
    }
    & > p {
      font-family: 'Catamaran';
      margin-bottom: 15px;
      @include maxBreakpoint(1023px) {
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      @include breakpoint($desktop-width) {
        &:last-of-type {
          border-left: solid 1px var(--altTextColor);
          margin-left: 15px;
          padding-left: 15px;
        }
      }
      & > .copyleft {
        display: inline-block;
        transform: rotateY(180deg);
        @include breakpoint($desktop-width) {
          font-family: 'Roboto';
        }
      }
    }
  }
  &__animation {
    align-items: end;
    display: grid;
    overflow: hidden;
    width: 100%;
    & > .boat__container {
      @include maxBreakpoint(1023px) {
        display: none;
      }
      @include breakpoint($desktop-width) {
        --rotateY: 0;
        align-self: start;
        animation: moveBoat 15s linear infinite alternate;
        grid-column: 1;
        grid-row: 1;
        margin: 0;
        width: min-content;
        z-index: -5;
        @media screen and (prefers-reduced-motion: reduce) {
          animation: none;
          display: none;
        }
      }
    }
    & svg {
      grid-column: 1;
      grid-row: 1;
      margin: 0 -30px;
      @include breakpoint($desktop-width) {
        margin: 35px -30px -2px;
        @include breakpoint($large-width) {
          margin-top: 50px;
          @include breakpoint($very-large) {
            margin-top: 60px;
          }
        }
      }
      &:first-of-type {
        fill: var(--altBg);
        opacity: 0.65;
        z-index: -10;
        @include breakpoint($desktop-width) {
          animation: wavesReversed 1.35s linear infinite;
          transform: translate(0px, 2px);
          @media screen and (prefers-reduced-motion: reduce) {
            animation: none;
          }
        }
      }
      &:last-of-type {
        fill: var(--altBg);
        z-index: 0;
        @include breakpoint($desktop-width) {
          animation: waves 1.35s linear infinite;
          @media screen and (prefers-reduced-motion: reduce) {
            animation: none;
          }
        }
      }
      &#boat {
        @include breakpoint($desktop-width) {
          animation: rockBoat 2.5s linear infinite;
          fill: var(--accentColor);
          height: 60px;
          margin-top: 0;
          opacity: 1;
          @media screen and (prefers-reduced-motion: reduce) {
            animation: none;
          }
          @include breakpoint($large-width) {
            height: 80px;
            @include breakpoint($very-large) {
              height: 100px;
            }
          }
        }
      }
    }
  }
}

@keyframes waves {
  from {
    transform: translate(0);
  }
  25% {
    transform: translate(4px, 4px);
  }
  50% {
    transform: translate(0px, 8px);
  }
  75% {
    transform: translate(-4px, 4px);
  }
  to {
    transform: translate(0);
  }
}

@keyframes wavesReversed {
  from {
    transform: translate(0px, 2px);
  }
  25% {
    transform: translate(-4px, 4px);
  }
  50% {
    transform: translate(0px, 6px);
  }
  75% {
    transform: translate(4px, 4px);
  }
  to {
    transform: translate(0px, 2px);
  }
}

@keyframes rockBoat {
  from {
    transform: translateY(0) rotateZ(0);
  }
  25% {
    transform: translateY(2px) rotateZ(10deg);
  }
  50% {
    transform: translateY(6px) rotateZ(0);
  }
  75% {
    transform: translateY(2px) rotateZ(-10deg);
  }
  to {
    transform: translateY(0) rotateZ(0);
  }
}

@keyframes moveBoat {
  from {
    transform: translateX(-120px) rotateY(var(--rotateY));
  }
  to {
    transform: translateX(calc(100vw + 80px)) rotateY(var(--rotateY));
  }
}
</style>

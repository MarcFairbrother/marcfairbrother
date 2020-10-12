<template>
  <svg xmlns="http://www.w3.org/2000/svg" id="shape" viewBox="0 0 100 100">
    <path
      d="M20 85 70 30 75 60 30 20 32 80 90 85 5 35 90 20 60 5 50 95 95 55 5 60 15 15 20 85"
      id="path"
      fill="none"
      stroke-linejoin="round"
      stroke-linecap="round"
    >
      <animate
        attributeName="d"
        id="animation"
        values="M20 85 70 30 75 60 30 20 32 80 90 85 5 35 90 20 60 5 50 95 95 55 5 60 15 15 20 85"
        dur="3s"
        begin="indefinite"
      />
    </path>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      coordinates:
        'M20 85 70 30 75 60 30 20 32 80 90 85 5 35 90 20 60 5 50 95 95 55 5 60 15 15 20 85',
      paths: [
        'M95 65 70 25 80 95 5 60 95 40 10 40 90 5 5 20 60 55 10 95 35 5 40 55 75 75 95 65',
        'M40 10 80 85 5 5 35 95 45 60 80 70 25 15 95 30 60 95 10 45 65 5 5 85 95 50 40 10',
        'M5 55 80 15 55 95 45 60 95 70 45 10 5 15 55 40 75 85 30 75 25 5 15 95 95 30 5 55',
        'M50 85 5 85 55 5 95 40 75 95 40 10 5 35 85 15 95 85 40 55 25 5 25 75 75 35 50 85',
        'M55 5 10 75 55 95 95 50 35 15 5 20 75 90 95 15 75 5 10 85 25 95 95 70 95 95 55 5',
      ],
    };
  },
  methods: {
    animatePath(animateEl, pathEl) {
      // 1. store old coordinates
      const oldCoordinates = this.coordinates;
      // 2. store and remove random set of coordinates from paths array
      const newCoordinatesIndex = Math.floor(Math.random() * this.paths.length);
      this.coordinates = this.paths[newCoordinatesIndex];
      this.paths.splice(newCoordinatesIndex, 1);
      // 3. push old coordingates to paths array
      this.paths.push(oldCoordinates);
      // 4. update svg animation attributes
      animateEl.setAttribute('values', `${oldCoordinates};${this.coordinates}`);
      // 5. update svg path attributes
      pathEl.setAttribute('d', `${this.coordinates}`);
      // 6. trigger animation
      animateEl.beginElement();
    },
  },
  mounted() {
    const path = shape.querySelector('#path');
    const animation = path.querySelector('#animation');
    // when svg animation ends, fire new animation cycle
    animation.addEventListener('endEvent', () => {
      this.animatePath(animation, path);
    });
    // start svg animation
    this.animatePath(animation, path);
  },
};
</script>
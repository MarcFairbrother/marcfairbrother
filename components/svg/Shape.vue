<template>
  <svg xmlns="http://www.w3.org/2000/svg" id="shape" viewBox="0 0 100 100">
    <path
      d="M20 75 70 30 75 60 30 20 32 80 90 85 10 35 90 20 60 10 50 95 90 55 5 60 15 15 20 75"
      id="path"
      fill="none"
      stroke-linejoin="round"
    >
      <animate
        attributeName="d"
        id="animation"
        values="M20 75 70 30 75 60 30 20 32 80 90 85 10 35 90 20 60 10 50 95 90 55 5 60 15 15 20 75"
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
      coordinates: [],
    };
  },
  methods: {
    animatePath(animateEl, pathEl) {
      // 1. store old coordinates
      let oldCoordinates = [...this.coordinates];
      // 2. calculate random coordinates for new ending position
      const x = Math.floor(Math.random() * 90 + 5);
      const y = Math.floor(Math.random() * 90 + 5);
      // 3. delete coordinates of starting position
      this.coordinates.splice(0, 2);
      // 4. add M command to new starting position
      this.coordinates[0] = `M${this.coordinates[0]}`;
      // 5. add coordinates for new ending position
      this.coordinates = [...this.coordinates, x, y];
      // 6. update svg attributes
      animateEl.setAttribute(
        'values',
        `${oldCoordinates.join(' ')} Z;${this.coordinates.join(' ')} Z`
      );
      pathEl.setAttribute('d', `${this.coordinates.join(' ')} Z`);
      // 7. trigger animation
      animateEl.beginElement();
    },
  },
  mounted() {
    const path = shape.querySelector('#path');
    const animation = path.querySelector('#animation');
    this.coordinates = path.getAttribute('d').split(' ');

    // when svg animation ends, fire new animation cycle
    animation.addEventListener('endEvent', () => {
      this.animatePath(animation, path);
    });

    this.animatePath(animation, path);
  },
};
</script>
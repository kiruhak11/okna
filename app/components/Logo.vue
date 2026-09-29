<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#a78bfa;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="logoGradGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ddd6fe;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#c4b5fd;stop-opacity:0.3" />
      </linearGradient>
      <filter id="logoShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.25"/>
      </filter>
    </defs>
    
    <circle cx="100" cy="100" r="65" 
            stroke="url(#logoGrad)" stroke-width="14" fill="none"
            filter="url(#logoShadow)"/>
    <circle cx="100" cy="100" r="52" fill="url(#logoGradGlass)"/>
    <circle cx="100" cy="100" r="45" 
            stroke="url(#logoGrad)" stroke-width="4" fill="none"/>
    <line x1="100" y1="60" x2="100" y2="140" 
          stroke="url(#logoGrad)" stroke-width="5"/>
    <line x1="60" y1="100" x2="140" y2="100" 
          stroke="url(#logoGrad)" stroke-width="5"/>
    <circle cx="100" cy="100" r="7" fill="url(#logoGrad)"/>
    <g opacity="0.9">
      <rect x="97" y="72" width="6" height="3" rx="1.5" fill="url(#logoGrad)"/>
      <rect x="97" y="125" width="6" height="3" rx="1.5" fill="url(#logoGrad)"/>
      <rect x="72" y="97" width="3" height="6" rx="1.5" fill="url(#logoGrad)"/>
      <rect x="125" y="97" width="3" height="6" rx="1.5" fill="url(#logoGrad)"/>
    </g>
    <path d="M 75 70 Q 70 75 75 80" stroke="white" stroke-width="2.5" 
          fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M 125 70 Q 120 75 125 80" stroke="white" stroke-width="2.5" 
          fill="none" stroke-linecap="round" opacity="0.4"/>
    <circle cx="85" cy="115" r="3" fill="white" opacity="0.5"/>
    <circle cx="70" cy="70" r="3" fill="url(#logoGrad)" opacity="0.7"/>
    <circle cx="130" cy="70" r="3" fill="url(#logoGrad)" opacity="0.7"/>
    <circle cx="70" cy="130" r="3" fill="url(#logoGrad)" opacity="0.7"/>
    <circle cx="130" cy="130" r="3" fill="url(#logoGrad)" opacity="0.7"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: '40',
  className: '',
});
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.3s ease;
}

svg:hover {
  transform: scale(1.05);
}
</style>

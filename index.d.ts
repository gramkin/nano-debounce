declare module 'nano-debounce' {
  function debounce<F extends Function>(callback: F, ms: number, immediate?: boolean): F
  export default debounce;
}

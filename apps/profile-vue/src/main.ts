
import './style.css'
import { createApp } from 'vue';
import App from './App.vue';

export function mount(el: HTMLElement) {
  createApp(App).mount(el);
}

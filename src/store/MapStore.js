import { makeAutoObservable } from "mobx";

class MapStore {
  layerVisible = true; // Default visibility
  selectedName = null;
  selectedLength = null;

  constructor() {
    makeAutoObservable(this);
  }

  toggleLayer() {
    this.layerVisible = !this.layerVisible;
  }

  setSelectedName(name) {
    this.selectedName = name;
  }

  setSelectedLength(length) {
    this.selectedLength = length;
  }
}

const mapStore = new MapStore();
export default mapStore;

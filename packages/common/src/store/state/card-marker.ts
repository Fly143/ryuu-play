import { Card } from '../card/card';

export interface MarkerItem {
  source: Card;
  name: string;
  /** Absolute turn number after which this marker expires (inclusive end). */
  untilTurn?: number;
}

export class Marker {

  public markers: MarkerItem[] = [];

  hasMarker(name: string, source?: Card) {
    if (source === undefined) {
      return this.markers.some(c => c.name === name);
    }
    return this.markers.some(c => c.source === source && c.name === name);
  }

  removeMarker(name: string, source?: Card) {
    if (!this.hasMarker(name, source)) {
      return;
    }
    if (source === undefined) {
      this.markers = this.markers.filter(c => c.name !== name);
      return;
    }
    this.markers = this.markers.filter(c => c.source !== source || c.name !== name);
  }

  addMarker(name: string, source: Card, untilTurn?: number) {
    if (this.hasMarker(name, source)) {
      return;
    }
    const item: MarkerItem = { name, source };
    if (untilTurn !== undefined) {
      item.untilTurn = untilTurn;
    }
    this.markers.push(item);
  }

  /** Drop markers whose untilTurn is strictly before the given turn. */
  expireMarkers(turn: number) {
    this.markers = this.markers.filter(m => m.untilTurn === undefined || m.untilTurn >= turn);
  }
}

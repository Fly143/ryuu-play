import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ArceusVSTARGG70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arceus V";
  public hp: number = 280;
    public height?: number = 3.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Starbirth", powerType: PowerType.ABILITY, text: "During your turn, you may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trinity Nova", cost: [], damage: "200", text: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "CRZ";
  public name: string = "Arceus VSTAR";
  public fullName: string = "Arceus VSTAR CRZ GG70";
  public text: string = "Arceus VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}

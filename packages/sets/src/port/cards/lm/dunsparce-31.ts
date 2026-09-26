import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Dunsparce_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Deadlock", powerType: PowerType.ABILITY, text: "As long as Dunsparce is your Active Pokémon, your opponent's Dunsparce can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Down Draw", cost: [], damage: "", text: "Draw 2 cards from the bottom of your deck." },
      { name: "Tripping Turn", cost: [], damage: "", text: "The Defending Pokémon is now Confused. You may switch Dunsparce with 1 of your Benched Pokémon." }
  ];
  public set: string = "LM";
  public name: string = "Dunsparce";
  public fullName: string = "Dunsparce LM 31";
  public text: string = "Dunsparce";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}

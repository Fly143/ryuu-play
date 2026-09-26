import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class GalladeE4LVX_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gallade E4";
  public hp: number = 100;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blade Storm", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Gallade E4 LV.X from your hand onto your Active Gallade E4, you may put 1 damage counter on each of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aimed Cut", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each damage counter on the Defending Pokémon." }
  ];
  public set: string = "RR";
  public name: string = "Gallade E4 LV.X";
  public fullName: string = "Gallade E4 LV.X RR 106";
  public text: string = "Gallade E4 LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}

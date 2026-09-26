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

export class Milotic_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Feebas";
  public hp: number = 100;
    public height?: number = 6.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Healing Shower", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Milotic from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon and your opponent's Pokémon (excluding Pokémon-ex).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "30", text: "" },
      { name: "Distorted Wave", cost: [], damage: "80", text: "Before doing damage, remove 3 damage counters from the Defending Pokémon (all if there are less than 3)." }
  ];
  public set: string = "HL";
  public name: string = "Milotic";
  public fullName: string = "Milotic HL 12";
  public text: string = "Milotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}

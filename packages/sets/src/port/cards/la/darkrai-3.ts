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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Darkrai_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Shade", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Darkrai from your hand onto your Bench, you may choose 1 of the Defending Pokémon. That Pokémon is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Slumber", cost: [], damage: "10", text: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep." },
      { name: "Dark Resolve", cost: [], damage: "40", text: "If the Defending Pokémon is Asleep, remove 4 damage counters from Darkrai." }
  ];
  public set: string = "LA";
  public name: string = "Darkrai";
  public fullName: string = "Darkrai LA 3";
  public text: string = "Darkrai";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}

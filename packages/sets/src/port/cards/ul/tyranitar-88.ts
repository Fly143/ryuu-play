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

export class Tyranitar_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Darkness Howl", cost: [], damage: "", text: "This attack does 20 damage to each Pokémon in play (both yours and your opponent's) (excluding any Darkness Pokémon). (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Power Claw", cost: [], damage: "60", text: "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon." },
      { name: "Megaton Tail", cost: [], damage: "120", text: "Discard the top 3 cards of your deck." }
  ];
  public set: string = "UL";
  public name: string = "Tyranitar";
  public fullName: string = "Tyranitar UL 88";
  public text: string = "Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}

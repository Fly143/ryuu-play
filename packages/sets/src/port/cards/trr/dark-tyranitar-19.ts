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

export class DarkTyranitar_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Pupitar";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grind", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar." },
      { name: "Spinning Tail", cost: [], damage: "", text: "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Bite Off", cost: [], damage: "70+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 70 damage plus 50 more damage." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Tyranitar";
  public fullName: string = "Dark Tyranitar TRR 19";
  public text: string = "Dark Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}

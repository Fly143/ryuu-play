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

export class Mewtwo_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic", cost: [], damage: "20+", text: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon." },
      { name: "Barrier", cost: [], damage: "", text: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon. If 1 of your Pokémon used Barrier during your last turn, this attack can't be used." }
  ];
  public set: string = "EVO";
  public name: string = "Mewtwo";
  public fullName: string = "Mewtwo EVO 51";
  public text: string = "Mewtwo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}

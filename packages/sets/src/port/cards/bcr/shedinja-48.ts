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

export class Shedinja_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Empty Shell", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cursed Drop", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "BCR";
  public name: string = "Shedinja";
  public fullName: string = "Shedinja BCR 48";
  public text: string = "Shedinja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}

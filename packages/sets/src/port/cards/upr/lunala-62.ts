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

export class Lunala_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Full Moon Star", cost: [], damage: "", text: "For each of your opponent's Pokémon in play, attach a Psychic Energy card from your discard pile to your Pokémon in any way you like." },
      { name: "Psystorm", cost: [], damage: "20×", text: "This attack does 20 damage times the amount of Energy attached to all Pokémon." }
  ];
  public set: string = "UPR";
  public name: string = "Lunala ◇";
  public fullName: string = "Lunala ◇ UPR 62";
  public text: string = "Lunala ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}

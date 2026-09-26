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

export class Jellicent_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frillish";
  public hp: number = 100;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Meddling", cost: [], damage: "", text: "Attach 3 Energy cards from your opponent's discard pile to his or her Pokémon in any way you like." },
      { name: "Ensnaring Spray", cost: [], damage: "50+", text: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Jellicent";
  public fullName: string = "Jellicent PHF 21";
  public text: string = "Jellicent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}

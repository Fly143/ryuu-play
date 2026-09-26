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

export class Omastar_233 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Omanyte";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Time Spiral", cost: [], damage: "", text: "Choose 1 of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from that Pokémon and have your opponent shuffle that card into his or her deck." },
      { name: "Primal Tentacles", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Helix Fossil, Dome Fossil, and Old Amber in your discard pile." }
  ];
  public set: string = "AR";
  public name: string = "Omastar";
  public fullName: string = "Omastar AR 23";
  public text: string = "Omastar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}

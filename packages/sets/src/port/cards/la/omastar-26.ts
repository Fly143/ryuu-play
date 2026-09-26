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

export class Omastar_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Omanyte";
  public hp: number = 110;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Swirl", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Omastar from your hand to evolve 1 of your Pokémon, you may remove the highest Stage Evolution card from each of your opponent's Benched Evolved Pokémon and put those cards back into his or her hand. You can't use more than 1 Primal Swirl Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Send Back", cost: [], damage: "40", text: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon." }
  ];
  public set: string = "LA";
  public name: string = "Omastar";
  public fullName: string = "Omastar LA 26";
  public text: string = "Omastar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}

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

export class Umbreon_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Moon", powerType: PowerType.ABILITY, text: "When your opponent attaches a Special Energy card from his or her hand to 1 of his or her Pokémon, put 1 damage counter on that Pokémon. You can't use more than 1 Delta Moon Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Feint Attack", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon." }
  ];
  public set: string = "DS";
  public name: string = "Umbreon δ";
  public fullName: string = "Umbreon δ DS 17";
  public text: string = "Umbreon δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}

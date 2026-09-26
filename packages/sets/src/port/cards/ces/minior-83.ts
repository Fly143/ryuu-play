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

export class Minior_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Falling Star", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is in your hand and your Bench isn't full, you may move your Active Pokémon to your Bench and play this Pokémon as your new Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Swift", cost: [], damage: "30", text: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon." }
  ];
  public set: string = "CES";
  public name: string = "Minior";
  public fullName: string = "Minior CES 83";
  public text: string = "Minior";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}

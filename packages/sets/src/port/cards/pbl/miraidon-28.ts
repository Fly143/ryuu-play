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

export class Miraidon_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Photon Cord", powerType: PowerType.ABILITY, text: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move up to 2 Basic Lightning Energy cards from this Pokémon to 1 of your Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunder", cost: [], damage: "90", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "PBL";
  public name: string = "Miraidon";
  public fullName: string = "Miraidon PBL 28";
  public text: string = "Miraidon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}

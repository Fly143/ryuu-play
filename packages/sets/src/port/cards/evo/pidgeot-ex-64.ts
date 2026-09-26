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

export class PidgeotEX_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mirror Move", cost: [], damage: "", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage to your opponent's Active Pokémon." },
      { name: "Feather Lance", cost: [], damage: "80", text: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and resistance for Benched Pokémon.)" }
  ];
  public set: string = "EVO";
  public name: string = "Pidgeot-EX";
  public fullName: string = "Pidgeot-EX EVO 64";
  public text: string = "Pidgeot-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}

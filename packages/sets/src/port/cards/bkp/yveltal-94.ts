import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Yveltal_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 5.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fright Night", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, each Pokémon Tool card in play has no effect.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pitch-Black Spear", cost: [], damage: "60", text: "This attack does 60 damage to 1 of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "BKP";
  public name: string = "Yveltal";
  public fullName: string = "Yveltal BKP 94";
  public text: string = "Yveltal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}

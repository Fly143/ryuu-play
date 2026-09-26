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

export class PrimalGroudonEX_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Groudon-EX";
  public hp: number = 240;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Max", powerType: PowerType.ABILITY, text: "When 1 of your Pokémon becomes this Pokémon, heal all damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gaia Volcano", cost: [], damage: "100+", text: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card." }
  ];
  public set: string = "BKT";
  public name: string = "Primal Groudon-EX";
  public fullName: string = "Primal Groudon-EX BKT 97";
  public text: string = "Primal Groudon-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "heal:999");
    }
    return state;
  }
}

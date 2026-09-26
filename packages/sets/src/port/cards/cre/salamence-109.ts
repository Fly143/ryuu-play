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

export class Salamence_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Intimidating Roar", powerType: PowerType.ABILITY, text: "Once during your turn, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fierce Dragon", cost: [], damage: "100+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage." }
  ];
  public set: string = "CRE";
  public name: string = "Salamence";
  public fullName: string = "Salamence CRE 109";
  public text: string = "Salamence";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}

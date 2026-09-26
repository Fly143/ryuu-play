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

export class RayquazaVMAX_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rayquaza V";
  public hp: number = 320;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Azure Pulse", powerType: PowerType.ABILITY, text: "Once during your turn, you may discard your hand and draw 3 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Burst", cost: [], damage: "20+", text: "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way." }
  ];
  public set: string = "CRZ";
  public name: string = "Rayquaza VMAX";
  public fullName: string = "Rayquaza VMAX CRZ 101";
  public text: string = "Rayquaza VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 3);
    }
    return state;
  }
}

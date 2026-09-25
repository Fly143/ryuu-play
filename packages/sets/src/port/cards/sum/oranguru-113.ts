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

export class Oranguru_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Instruct", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw cards until you have 3 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic", cost: [], damage: "60+", text: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "SUM";
  public name: string = "Oranguru";
  public fullName: string = "Oranguru SUM 113";
  public text: string = "Oranguru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "drawUntilHand:3");
    }
    return state;
  }
}

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

export class Gallade_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 150;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Premonition", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 5 cards of your deck and put them back on top of your deck in any order.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sensitive Blade", cost: [], damage: "60+", text: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage." }
  ];
  public set: string = "BKP";
  public name: string = "Gallade";
  public fullName: string = "Gallade BKP 84";
  public text: string = "Gallade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}

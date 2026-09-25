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

export class CharizardTG03 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Battle Sense", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Royal Blaze", cost: [], damage: "100+", text: "This attack does 50 more damage for each Leon card in your discard pile." }
  ];
  public set: string = "LOR";
  public name: string = "Charizard";
  public fullName: string = "Charizard LOR TG03";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}

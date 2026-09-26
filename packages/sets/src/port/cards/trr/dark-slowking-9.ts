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

export class DarkSlowking_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 80;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cunning", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top card of your opponent's deck. Then, you may shuffle his or her deck. This power can't be used if Dark Slowking is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Litter", cost: [], damage: "20+", text: "You may discard a combination of up to 2 Pokémon Tool cards and Rocket's Secret Machine cards from your hand. If you do, this attack does 20 damage plus 30 more damage for each card you discarded." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Slowking";
  public fullName: string = "Dark Slowking TRR 9";
  public text: string = "Dark Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}

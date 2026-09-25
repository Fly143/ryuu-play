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

export class SilvallyGX_184 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Type: Null";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Disk Reload", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Brave Buddies", cost: [], damage: "50+", text: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage." },
      { name: "Silver Knight-GX", cost: [], damage: "", text: "If your opponent's Active Pokémon is an Ultra Beast, it is Knocked Out. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Silvally-GX";
  public fullName: string = "Silvally-GX CEC 184";
  public text: string = "Silvally-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "drawUntilHand:5");
    }
    return state;
  }
}

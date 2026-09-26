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

export class KoraidonEx_231 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dino Cry", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach up to 2 Basic Fighting Energy cards from your discard pile to your Basic Fighting Pokémon in any way you like. If you use this Ability, your turn ends.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wild Impact", cost: [], damage: "220", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "SVI";
  public name: string = "Koraidon ex";
  public fullName: string = "Koraidon ex SVI 231";
  public text: string = "Koraidon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}

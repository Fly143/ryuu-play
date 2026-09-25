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

export class EeveeGXSM174 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ascension DNA", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have a Pokémon in your hand that evolves from Eevee, you may put that card onto this Pokémon to evolve it. Before evolving, heal all damage from this Pokémon. You can't use this Ability during your first turn or on the turn this Pokémon was put into play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Boost Dash", cost: [], damage: "100", text: "" },
      { name: "Joy Maker-GX", cost: [], damage: "", text: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Eevee-GX";
  public fullName: string = "Eevee-GX PR-SM SM174";
  public text: string = "Eevee-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
